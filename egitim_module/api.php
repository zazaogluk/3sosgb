<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

$usersFile = 'users.json';
$progressFile = 'progress.json';
$logsFile = 'logs.json';

function readJSON($file) {
    if (!file_exists($file)) return [];
    $content = file_get_contents($file);
    return json_decode($content, true) ?? [];
}

function writeJSON($file, $data) {
    file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT));
}

$method = $_SERVER['REQUEST_METHOD'];
$action = $_GET['action'] ?? '';

if ($method !== 'POST') {
    echo json_encode(['error' => 'Sadece POST istekleri kabul edilir']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

switch ($action) {
    case 'login':
        $username = $input['username'] ?? '';
        $password = $input['password'] ?? '';
        $users = readJSON($usersFile);
        $user = null;
        foreach ($users as $u) {
            if ($u['username'] === $username && $u['password'] === $password) {
                $user = $u;
                break;
            }
        }
        if ($user) {
            $token = bin2hex(random_bytes(16));
            echo json_encode(['success' => true, 'user' => $user, 'token' => $token]);
        } else {
            echo json_encode(['success' => false, 'error' => 'Hatalı kullanıcı adı veya şifre']);
        }
        break;

    case 'getUsers':
        $users = readJSON($usersFile);
        echo json_encode(['success' => true, 'users' => $users]);
        break;

    case 'addUser':
        $newUser = $input['user'] ?? [];
        if (empty($newUser['username']) || empty($newUser['password'])) {
            echo json_encode(['success' => false, 'error' => 'Kullanıcı adı ve şifre zorunlu']);
            break;
        }
        $users = readJSON($usersFile);
        foreach ($users as $u) {
            if ($u['username'] === $newUser['username']) {
                echo json_encode(['success' => false, 'error' => 'Kullanıcı adı zaten var']);
                break 2;
            }
        }
        $newUser['id'] = time() . rand(100, 999);
        $users[] = $newUser;
        writeJSON($usersFile, $users);
        echo json_encode(['success' => true, 'user' => $newUser]);
        break;

    case 'deleteUser':
        $userId = $input['userId'] ?? '';
        $users = readJSON($usersFile);
        $newUsers = array_filter($users, fn($u) => $u['id'] != $userId);
        writeJSON($usersFile, array_values($newUsers));
        echo json_encode(['success' => true]);
        break;

    case 'getProgress':
        $userId = $input['userId'] ?? '';
        $progress = readJSON($progressFile);
        $userProgress = $progress[$userId] ?? [];
        echo json_encode(['success' => true, 'progress' => $userProgress]);
        break;

    case 'saveProgress':
        $userId = $input['userId'] ?? '';
        $moduleId = $input['moduleId'] ?? '';
        $data = $input['data'] ?? [];
        $progress = readJSON($progressFile);
        if (!isset($progress[$userId])) $progress[$userId] = [];
        if (!isset($progress[$userId][$moduleId])) $progress[$userId][$moduleId] = ['videoWatchedPercent' => 0, 'completedAt' => null];
        $progress[$userId][$moduleId] = array_merge($progress[$userId][$moduleId], $data);
        if (($data['videoWatchedPercent'] ?? 0) == 100 && empty($progress[$userId][$moduleId]['completedAt'])) {
            $progress[$userId][$moduleId]['completedAt'] = date('c');
        }
        writeJSON($progressFile, $progress);
        echo json_encode(['success' => true]);
        break;

    case 'saveExamResult':
        $userId = $input['userId'] ?? '';
        $category = $input['category'] ?? '';
        $score = $input['score'] ?? 0;
        $passed = $input['passed'] ?? false;
        $progress = readJSON($progressFile);
        if (!isset($progress[$userId])) $progress[$userId] = [];
        $progress[$userId]["exam_$category"] = ['passed' => $passed, 'score' => $score];
        writeJSON($progressFile, $progress);
        echo json_encode(['success' => true]);
        break;

    case 'addLog':
        $log = $input['log'] ?? [];
        $logs = readJSON($logsFile);
        $logs[] = $log;
        writeJSON($logsFile, $logs);
        echo json_encode(['success' => true]);
        break;

    case 'updateLog':
        $sessionId = $input['sessionId'] ?? '';
        $logoutTime = $input['logoutTime'] ?? null;
        $logs = readJSON($logsFile);
        foreach ($logs as &$log) {
            if ($log['sessionId'] === $sessionId) {
                $log['logoutTime'] = $logoutTime;
                break;
            }
        }
        writeJSON($logsFile, $logs);
        echo json_encode(['success' => true]);
        break;

    case 'getLogs':
        $logs = readJSON($logsFile);
        echo json_encode(['success' => true, 'logs' => $logs]);
        break;

    default:
        echo json_encode(['error' => 'Geçersiz aksiyon']);
}
?>
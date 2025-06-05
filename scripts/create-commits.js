import { execSync } from 'child_process';

// Получаем количество коммитов из аргументов командной строки
const n = parseInt(process.argv[2], 10);

if (isNaN(n) || n <= 0) {
    console.error('Please provide a valid number of commits');
    console.error('Usage: npm run create-commits <number_of_commits>');
    process.exit(1);
}

// Массив с разными сообщениями для коммитов
const messages = [
    "Update documentation",
    "Fix typo in README",
    "Refactor code structure",
    "Add new feature",
    "Improve performance",
    "Update dependencies",
    "Fix bug in main function",
    "Add test cases",
    "Optimize algorithm",
    "Clean up code",
    "Update configuration",
    "Fix linting issues",
    "Add comments",
    "Update version",
    "Fix security issues"
];

// Создаем n пустых коммитов
for (let i = 1; i <= n; i++) {
    // Выбираем случайное сообщение из массива
    const message = messages[Math.floor(Math.random() * messages.length)];
    
    try {
        // Создаем пустой коммит
        execSync(`git commit --allow-empty -m "${message} (commit ${i} of ${n})"`, { stdio: 'inherit' });
        console.log(`Created commit ${i} of ${n}: ${message}`);
    } catch (error) {
        console.error(`Failed to create commit ${i}:`, error.message);
        process.exit(1);
    }
}

console.log(`Done! Created ${n} empty commits.`); 
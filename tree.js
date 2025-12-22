    /* eslint-env node */
    /* eslint-disable no-unused-vars */

    import fs from 'fs';
    import path from 'path';
    import { fileURLToPath } from 'url';

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    function generateTree(dir, prefix = '') {
    const exclude = [
        'node_modules',
        '.git',
        'dist',
        'build',
        '.vscode',
        'coverage',
        '.next',
        '.nuxt',
        'out',
        '.cache',
        'logs',
        '.gitignore',
        'eslint.config.js',
        'package-lock.json',
        'package.json',
        'README.md',
        'tree.js',
        'vite.config.js',
        'structure.txt'
    ];
    
    let items;
    try {
        items = fs.readdirSync(dir).filter(item => {
        if (exclude.includes(item)) return false;
        if (item.endsWith('.log')) return false;
        return true;
        });
    } catch {
        return '';
    }
    
    let result = '';
    
    items.forEach((item, index) => {
        const fullPath = path.join(dir, item);
        const isLastItem = index === items.length - 1;
        
        let stats;
        try {
        stats = fs.statSync(fullPath);
        } catch {
        return;
        }
        
        result += `${prefix}${isLastItem ? '└── ' : '├── '}${item}\n`;
        
        if (stats.isDirectory()) {
        const newPrefix = prefix + (isLastItem ? '    ' : '│   ');
        result += generateTree(fullPath, newPrefix);
        }
    });
    
    return result;
    }

    const projectName = path.basename(process.cwd());
    const tree = `${projectName}\n` + generateTree('.');
    fs.writeFileSync('structure.txt', tree);
    console.log('✅ structure.txt 파일이 생성되었습니다!');
    console.log('📁 모든 폴더와 파일이 포함되었습니다.');

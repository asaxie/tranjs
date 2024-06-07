const fs = require('fs');
const path = require('path');
const glob = require('glob');
// 知道項目中所有中文


// 遍历项目目录中的指定类型文件
const getAllFiles = (dirPath, fileTypes, arrayOfFiles) => {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach((file) => {
    const filePath = path.join(dirPath, "/", file);
    const isDirectory = fs.statSync(filePath).isDirectory();
    const extension = path.extname(filePath);

     // 忽略 strings.xml 文件
     if (file === 'strings.xml') {
      return;
    }

    if (isDirectory) {
      arrayOfFiles = getAllFiles(filePath, fileTypes, arrayOfFiles);
    } else if (fileTypes.includes(extension)) {
      
      arrayOfFiles.push(filePath);
    }
  });

  return arrayOfFiles;
};

// 正则表达式匹配中文字符
const chineseRegex = /[\u4e00-\u9fa5]+/g;

// 正则表达式匹配特定模式的字符串（例如：MyLog.e(LOG_TAG,"播放音頻：${file?.path}")）
const specificPatternRegex = /MyLog\.\w+\(LOG_TAG,"[^"]*?[\u4e00-\u9fa5]+.*?"\)/g;

// 读取文件内容并提取中文字符，排除注释和特定模式中的中文字符
// 正则表达式匹配中文字符

// 正则表达式匹配HTML或XML风格的注释
const htmlCommentRegex = /<!--[\s\S]*?-->/g;

// 读取文件内容并提取中文字符，排除注释和特定模式中的中文字符
const extractChineseFromFile = (filePath) => {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split(/\r?\n/);
  const chineseChars = [];
  let inBlockComment = false;

  lines.forEach(line => {
    // 检查是否是HTML或XML风格的注释，并且排除它们
    const htmlCommentMatch = line.match(htmlCommentRegex);
    if (htmlCommentMatch) {
      // 如果检测到HTML注释，跳过这一行
      return;
    }

    // 检查是否开启或结束多行注释
    if (line.trim().startsWith('/*')) {
      inBlockComment = true;
    }
    if (inBlockComment && line.includes('*/')) {
      inBlockComment = false;
    }

    // 如果在多行注释中，跳过当前行
    if (inBlockComment) {
      return;
    }

    const logIndex = line.indexOf('MyLog')

    if (logIndex > -1) {
      return
    }

    // 排除单行注释
    const commentIndex = line.indexOf('//');
    if (commentIndex !== -1) {
      line = line.substring(0, commentIndex).trim();
    }



    // 提取中文字符
    const matches = line.match(chineseRegex);
    if (matches) {
      chineseChars.push(...matches);
    }
  });

  return chineseChars;
};












// 主函数
// 主函数
const main = () => {
  const projectDir = path.resolve(__dirname, '/Users/asa/code/iam-gias-app/app'); // 替换为你的项目路径
  const fileTypes = ['.kt', '.java', '.xml']; // 指定搜索的文件类型
  const allFiles = getAllFiles(projectDir, fileTypes);
  const chineseOccurrences = {};

  allFiles.forEach((file) => {
    const chineseInFile = extractChineseFromFile(file);

    if (chineseInFile.length > 0) {
      chineseOccurrences[file] = chineseInFile;
    }
  });

  console.log("Chinese characters found in the following files:");
  console.log(chineseOccurrences);
};

// 运行主函数
main();


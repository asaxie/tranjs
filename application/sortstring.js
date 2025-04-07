const fs = require('fs');
const xml2js = require('xml2js');

// 读取和解析 strings.xml 文件
const parseAndSortStringsXml = (filePath) => {
  fs.readFile(filePath, 'utf-8', (err, fileContents) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    xml2js.parseString(fileContents, (err, result) => {
      if (err) {
        console.error('Error parsing XML:', err);
        return;
      }

      // 确保文件中有 strings 元素
      if (!result || !result.resources || !result.resources.string) {
        console.error('strings.xml is not properly formatted.');
        return;
      }

      // 排序 strings 元素
      result.resources.string.sort((a, b) => {
        return a.$.name.localeCompare(b.$.name);
      });

      // 将排序后的字符串资源转换回 XML 格式
      const builder = new xml2js.Builder();
      const sortedXml = builder.buildObject(result);

      // 写入排序后的 XML 到文件
      fs.writeFile(filePath, sortedXml, 'utf-8', (err) => {
        if (err) {
          console.error('Error writing file:', err);
        } else {
          console.log('strings.xml has been sorted and saved.');
        }
      });
    });
  });
};

// 使用示例
const stringsXmlPath = '/Users/asa/code/iam-gias-app/app/src/main/res/values/strings.xml'; // 替换为实际的 strings.xml 文件路径
parseAndSortStringsXml(stringsXmlPath);
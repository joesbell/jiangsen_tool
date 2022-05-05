// import superagent from 'superagent'//无法取值是因为很快类库文件是用js 写的，不支持ts。一般这种情况下，可以寻找一个xxxx.d.ts文件也就是翻译文件来引入。通过@types/xxx
import superagent from 'superagent';
import fs from 'fs';
import path from 'path';
// const cheerio = require('cheerio');
import JsCrawler from './jsCrawler';
export interface Customization {
  analyze: (html: string, filePath: string) => string;
}
class Crawler {
  constructor(private customization: Customization, private url: string) {
    this.initAsyncData();
  }
  private filePath = path.resolve(__dirname, './resource/resource.json');

  async getHtml() {
    const result = await superagent.get(this.url);
    return result.text;
  }

  async initAsyncData() {
    const html = await this.getHtml();
    const fileContent = this.customization.analyze(html, this.filePath);
    this.writeFile(fileContent);
  }
  writeFile(content: string) {
    fs.writeFileSync(this.filePath, content);
  }
}
const url = 'https://lexuecode.com/';
const customization = JsCrawler.getSingle();
new Crawler(customization, url);

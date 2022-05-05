/**
 * ts中的组合设计模式
 *
 */
import * as cheerio from 'cheerio';
import fs from 'fs';
import { Customization } from './crawler';
interface Course {
  title: string | undefined;
  desc: string | undefined;
}
interface courseResult {
  time: number;
  data: Course[];
}
interface fileContent {
  [key: number]: Course[];
}
export default class JsCrawler implements Customization {
  private constructor() {}
  private static single: JsCrawler;
  static getSingle() {
    if (!JsCrawler.single) {
      JsCrawler.single = new JsCrawler();
    }
    return JsCrawler.single;
  }
  //查找取出数据
  private getCourseInfo(html: string) {
    const $ = cheerio.load(html);
    const courseItems = $('.entry-wrapper');
    const getCourseInfo: Course[] = [];
    courseItems.map((index, element) => {
      const title = $(element).find('.entry-header').find('a').attr('title');
      const desc = $(element).find('.entry-excerpt').text();
      getCourseInfo.push({
        title,
        desc,
      });
    });
    const result = {
      time: new Date().getTime(),
      data: getCourseInfo,
    };
    return result;
  }
  //存放数据
  private generateJsonContent(Result: courseResult, filePath: string) {
    let fileContent: fileContent = {};
    if (fs.existsSync(filePath)) {
      fileContent = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    }
    fileContent[Result.time] = Result.data;
    return fileContent;
  }
  public analyze(html: string, filePath: string) {
    const Result = this.getCourseInfo(html);
    let fileContent = this.generateJsonContent(Result, filePath);
    return JSON.stringify(fileContent);
  }
}

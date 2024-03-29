import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
// import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome`}
      description="Monday Tutorial <head />">
      <main>
        <div className='container margin-vert--lg'>
          <div className='margin-vert--lg'>
            <h1>灰皮书</h1>
            <h2 className='margin-vert--lg'>欢迎来到 vvvv gamma 中文文档</h2>
            <div className={styles.description}>
              <p>
                本站是&nbsp;
                <a href="https://thegraybook.vvvv.org/" target="_blank">
                the gray book
                </a>
                &nbsp;的中文站点。分享资讯，方便华语世界用户学习分享。同时如果你也有兴趣交流或者参与翻译工作，请随时联系我，同时请查看<a
                  href="https://github.com/vvvv-happay-team/thegraybookcn"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  github
                </a>
                。
              </p>
            </div>

          </div>
          <hr></hr>
          <div>
            <div class="row margin-vert--xl">
              <div class="col col--6">
                <div class="card margin-bottom--md">
                  <div class="card__header">
                    <h3>文档（Notion）</h3>
                  </div>
                  <div class="card__body">
                    <p>
                      gamma的文档，涉及编辑器，VL语言的特性以及第三方库的使用...
                    </p>
                  </div>
                  <div class="card__footer">
                    <a href="https://lianjieshe.notion.site/lianjieshe/Gamma-c1eff39c7cd140f4adfe0fad71c15080" class="button button--outline button--primary" target="_blank">
                      查看
                    </a>
                  </div>
                </div>
              </div>
              <div class="col col--6">
                <div class="card margin-bottom--md">
                  <div class="card__header">
                    <h3>社区视频教程</h3>
                  </div>
                  <div class="card__body">
                    <p>
                      初级教程，中级教程，分享会活动视频
                    </p>
                  </div>
                  <div class="card__footer">
                    <a href="https://lianjieshe.notion.site/cab7f672008d474b8d8896ae1a6c8caa?pvs=4" class="button button--outline button--primary" target="_blank">查看</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

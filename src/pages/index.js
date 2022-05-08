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
                本站的是
                <a href="https://thegraybook.vvvv.org/" target="_blank">
                  the gray book
                </a>
                的中文站点。分享资讯，方便华语世界用户学习分享。同时如果你也有兴趣交流或者参与翻译工作，请随时联系我，同时请查看<a
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
              <div class="col col--3">
                <div class="card margin-bottom--md">
                  <div class="card__image">
                    <img
                      src="./img/docs.png"
                      alt="Image alt text"
                      title="Logo Title Text 1"
                    />
                  </div>
                  <div class="card__header">
                    <h3>文档</h3>
                  </div>
                  <div class="card__body">
                    <p>
                      gamma的文档，涉及编辑器，VL语言的特性以及第三方库的使用...
                    </p>
                  </div>
                  <div class="card__footer">
                    <Link to="/docs/getting-started" class="button button--outline button--primary">进入</Link>
                  </div>
                </div>
              </div>
              <div class="col col--3">
                <div class="card margin-bottom--md">
                  <div class="card__image">
                    <img
                      src="./img/docs.png"
                      alt="Image alt text"
                      title="Logo Title Text 1"
                    />
                  </div>
                  <div class="card__header">
                    <h3>解释</h3>
                  </div>
                  <div class="card__body">
                    <p>
                      介绍VL语言的设计理念，以及它又是如何指挥电脑完成工作的
                    </p>
                  </div>
                  <div class="card__footer">
                    <Link to="/explanations/the-language" class="button button--outline button--primary">进入</Link>
                  </div>
                </div>
              </div>
              <div class="col col--3">
                <div class="card margin-bottom--md">
                  <div class="card__image">
                    <img
                      src="./img/docs.png"
                      alt="Image alt text"
                      title="Logo Title Text 1"
                    />
                  </div>
                  <div class="card__header">
                    <h3>更新日志</h3>
                  </div>
                  <div class="card__body">
                    <p>
                      新版本更新时候的介绍，bug修复等等
                    </p>
                  </div>
                  <div class="card__footer">
                    <Link to="/changelog/2021.4" class="button button--outline button--primary">进入</Link>
                  </div>
                </div>
              </div>
              <div class="col col--3">
                <div class="card margin-bottom--md">
                  <div class="card__image">
                    <img
                      src="./img/docs.png"
                      alt="Image alt text"
                      title="Logo Title Text 1"
                    />
                  </div>
                  <div class="card__header">
                    <h3>开发计划</h3>
                  </div>
                  <div class="card__body">
                    <p>
                      未来的开发计划，gamma将会走向何处，又会有哪些变化
                    </p>
                  </div>
                  <div class="card__footer">
                    <Link to="/roadmap/planned-releases" class="button button--outline button--primary">进入</Link>
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

# vue-github-travis-ci

## 环境构建

- 注:如果要忽略的文件已被 git 管理,需要先移除,命令如下:

  ```shell
  git rm -r --cached idea/do.txt    //-r为递归
  ```

- 生成 ssh key

  ```shell
  cd ~/.ssh

  ssh-keygen -t rsa -b 4096 -C "TravisCIDeployKey"
  ```

- 拷贝密钥到当前项目， 首先切换到当前项目，然后运行

  ```shell
  scp root@IP:/root/.ssh/id_rsa ./deploy_key
  ```

- 安装(需要先安装ruby)
  ```shell
  gem install travis
  ```

- travis 登陆 GitHub

  ```shell
  travis login --github-token
  ```

- 对证书文件加密
  ```shell
  travis encrypt-file ./deploy_key --add
  ```
  > 执行成功后，就会在.travis.yml看到多了几行配置代码，把.\/deploy_key 前面的转义字符去掉（这里会造成构建失败）
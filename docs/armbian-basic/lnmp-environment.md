搭建 LNMP 环境
================================

## 安装 MariaDB

### MariaDB 基本配置

```bash
sudo apt install mariadb-server                      

sudo systemctl start mariadb                ### 手动启动 mariadb
sudo systemctl enable mariadb               ### 设置开机自启
```

### 运行安全初始化脚本

这是最重要的步骤，用于设置 root 密码、禁止 root 远程登录、移除不安全配置等：

`tip` 建议所有 MariaDB 服务器在生产环境中运行此脚本。你可以先跳过这个步骤，在之后的使用途中再执行这个脚本。


```bash
sudo mysql_secure_installation
```

### 创建新用户和数据库

```SQL
-- 登录 MySQL
mysql -u root -p

-- 创建数据库
CREATE DATABASE mydatabase;

-- 创建用户
CREATE USER 'myuser'@'localhost' IDENTIFIED BY 'your_password';

-- 授予权限
GRANT ALL PRIVILEGES ON mydatabase.* TO 'myuser'@'localhost';

-- 刷新权限
FLUSH PRIVILEGES;
```

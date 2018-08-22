### Setting up Mysql

```sh
use mysql;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'
update user set authentication_string=password('') where user='root';
```
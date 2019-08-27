---
layout: jupyter
title: Jupyter Notebook 操作 PostgreSql markdown
website: ''
tags: tech, 
---

### 安装与使用
安装python 驱动器： pip install psycopg2        

启动server：pg_ctlcluster 11 main start      

su - postgres

psql

\password postgres 设置密码


```python
import psycopg2
```


```python
conn=psycopg2.connect(database="postgres",user="postgres",password="123456",host="localhost",port="5432")
cur=conn.cursor() #创建指针对象
```


```python
# 创建表
cur.execute("CREATE TABLE student(id integer,name varchar,sex varchar);")
```


```python
#插入数据
cur.execute("INSERT INTO student(id,name,sex)VALUES(%s,%s,%s)",(1,'Aspirin','M'))
cur.execute("INSERT INTO student(id,name,sex)VALUES(%s,%s,%s)",(2,'Taxol','F'))
cur.execute("INSERT INTO student(id,name,sex)VALUES(%s,%s,%s)",(3,'Dixheral','M'))
```


```python
# 获取结果
cur.execute('SELECT * FROM student')
results=cur.fetchall()
print (results)
```

    [(1, 'Aspirin', 'M'), (2, 'Taxol', 'F'), (3, 'Dixheral', 'M')]



```python
# 关闭连接
conn.commit()
cur.close()
conn.close()
```

### 创建testdb 与 dbuser1 
Create User dbuser1 WITH PASSWORD '123456';

Create DATABASE testdb OWNER dbuser1;

GRANT ALL PRIVILEGES ON DATABASE testdb TO dbuser1;



```python
conn=psycopg2.connect(database="testdb",user="dbuser1",password="123456",host="localhost",port="5432")
cur=conn.cursor()
```


```python
cur.execute('select version();')
results=cur.fetchall()
print (results)
```

    [('PostgreSQL 11.5 (Ubuntu 11.5-1.pgdg18.04+1) on x86_64-pc-linux-gnu, compiled by gcc (Ubuntu 7.4.0-1ubuntu1~18.04.1) 7.4.0, 64-bit',)]



```python
# 创建表, 注意多行字符串
creates = "CREATE TABLE COMPANY \
       (ID INT PRIMARY KEY     NOT NULL,\
       NAME           TEXT    NOT NULL,\
       AGE            INT     NOT NULL,\
       ADDRESS        CHAR(50),\
       SALARY         REAL);"
creates
```




    'CREATE TABLE COMPANY        (ID INT PRIMARY KEY     NOT NULL,       NAME           TEXT    NOT NULL,       AGE            INT     NOT NULL,       ADDRESS        CHAR(50),       SALARY         REAL);'




```python
cur.execute(creates)
```


```python
cur.execute("INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY) VALUES (1, 'Paul', 32, 'California', 20000.00 );")
```


```python
conn.commit()
```


```python
cur.execute("SELECT id, name, address, salary  from COMPANY")
results=cur.fetchall()
print (results)
```

    [(1, 'Paul', 'California                                        ', 20000.0)]



```python
conn.commit()
cur.close()
conn.close()
```


```python

```

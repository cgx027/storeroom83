# Setup MongoDB
	- https://docs.mongodb.com/manual/tutorial/convert-standalone-to-replica-set/
		- Master/Primary:
			- 关闭原有mongodb service
			- 这样开启服务：mongod --port 27017 --dbpath /srv/mongodb/db0 --replSet rs0
			- 用客户端初始化rs：rs.initiate()
			- 查看状态：rs.config()/rs.conf()/rs.status()
		- Slave：
			- 加入RS：
				- 在客户端：rs.add("<hostname><:port>")

# Setup elasticsearch
	- Download elastic search, version 1.4.2
		- wget https://download.elastic.co/elasticsearch/elasticsearch/elasticsearch-1.4.2.tar.gz
	- extract
		- tar -xf elasticsearch-1.4.2.tar.gz
		- cd elasticsearch-1.4.2/
	- Install Java: sudo apt-get install openjdk-7-jre-headless
        - Install plugin: 
		- link:
			- https://github.com/richardwilly98/elasticsearch-river-mongodb
			- http://www.searchtech.pro/elasticsearch-plugins
		- ./bin/plugin -install elasticsearch/elasticsearch-mapper-attachments/1.9.0
		- ./bin/plugin -install com.github.richardwilly98.elasticsearch/elasticsearch-river-mongodb/2.0.9
	- Start elasticSearch
		- sudo ./elasticsearch

# Start website:
	- npm install
	- npm install -g grunt-cli
	- npm install -g bower
	- bower install
	- npm install -g mocha
	- Start mongodb
		- mongod --dbpath data/db --replSet rs0 --oplogSize 100
		- or: ./start_mongodb.sh
		- 初始化mongo replica set: mongo; rs.initiate()
	- Start elastic search
		- cd ~/tmp/elasticsearch
		- sudo ./bin/elasticsearch
	- 准备假数据：
		- grunt dropDevDatabase // drops dev database
		- grunt addDevUsers // adds admin user
		- grunt addDevStorerooms // add storerooms
		- grunt addDevItems // add items --- 需要在task/底下有一个seed_items.csv
	- grunt build
	- 启动网站：npm start
		- 换模式启动NODE_NV=test; npm start
		- 换端口启动：修改config/devemopment.json 或者test.json

FROM peterdavehello/opencc AS opencc
FROM docker.elastic.co/elasticsearch/elasticsearch:7.17.7 AS elasticsearch

ENV VERSION 7.17.7

# Install IK analyzer
RUN ./bin/elasticsearch-plugin install --batch https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v${VERSION}/elasticsearch-analysis-ik-${VERSION}.zip

# Use opencc to patch the main.dic for zh-tw support
FROM opencc AS patching

COPY --from=elasticsearch /usr/share/elasticsearch/config/analysis-ik/main.dic /home/usr/tmp/main.dic

RUN opencc -c s2tw.json -i /home/usr/tmp/main.dic -o /home/usr/tmp/main-zhtw.dic

RUN cp /home/usr/tmp/main.dic /home/usr/tmp/main-zhcn.dic

RUN cat /home/usr/tmp/main-zhtw.dic /home/usr/tmp/main-zhcn.dic | sort | uniq > /home/usr/tmp/main.dic

FROM elasticsearch

COPY --from=patching /home/usr/tmp/main.dic /usr/share/elasticsearch/config/analysis-ik/main.dic

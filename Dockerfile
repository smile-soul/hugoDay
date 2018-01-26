FROM publysher/hugo

MAINTAINER smilesoul

RUN echo "Asia/shanghai" > /etc/timezone

# ADD blog /opt
# WORKDIR /opt/blog

# CMD ["hugo", "server"]

EXPOSE 1313
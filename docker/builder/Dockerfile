FROM node:4

RUN apt-get update && apt-get install -y graphicsmagick curl wget jq daemon

ENV NPM_CONFIG_LOGLEVEL       warn
ENV NPM_CONFIG_REGISTRY       http://engci-maven-master.cisco.com/artifactory/api/npm/webex-npm-group
ENV COVERAGE                  TRUE
ENV SAUCE                     TRUE
ENV XUNIT                     TRUE
ENV PORT                      8000
ENV FIXTURE_PORT              9000
ENV KARMA_PORT                8001
ENV SAUCE_CONNECT_VERSION     4.4.2
ENV MAX_SAUCE_CONNECT_RETRIES 3
ENV MAX_TEST_SUITE_RETRIES    3
ENV SC_PID_FILE               /sauce/sc.pid
ENV SC_READY_FILE             /sauce/sc.ready
ENV SC_BINARY                 /sauce/sc-${SAUCE_CONNECT_VERSION}-linux/bin/sc

RUN mkdir -p /sauce
WORKDIR /sauce
RUN wget "https://saucelabs.com/downloads/sc-${SAUCE_CONNECT_VERSION}-linux.tar.gz"
RUN ls
RUN tar -xzf "sc-${SAUCE_CONNECT_VERSION}-linux.tar.gz"
RUN ln -s "${SC_BINARY}" /usr/local/bin/sc
RUN chmod ugo+w /sauce

WORKDIR /work

COPY cmd.sh cmd.sh

WORKDIR /home/jenkins/workspace

CMD '/work/cmd.sh'

FROM ubuntu:20.04

# Copy local code to the container image.
ENV SCANNER_HOME /https
WORKDIR $SCANNER_HOME
COPY . ./

RUN apt-get update && apt-get install -y --no-install-recommends \
    apt-utils \
    python3 \
    python3-pip \
    python3-setuptools \
    python3-wheel \
    build-essential \
    python3-dev

RUN pip3 install -r requirements.txt

# Run the web service on container startup. Using uvicorn, in this case.
CMD exec gunicorn https_scanner:app -w 4 --timeout 10000 -k uvicorn.workers.UvicornWorker

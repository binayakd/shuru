#!/bin/bash

set -ex

nerdctl build -t harbor.192.168.0.101.nip.io/library/shuru:latest .
nerdctl --insecure-registry push harbor.192.168.0.101.nip.io/library/shuru:latest
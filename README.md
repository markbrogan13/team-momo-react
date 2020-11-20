# Team Momo Simple React App with Docker

## Overview

This project was made specifically for Sprint 6 and adding Docker integrations into a full-scale app. As per Prof. Karra's request, Team Momo has implemented a quick react webapp that grabs the current global Novel Coronavirus SARS-CoV-2 with total documented cases *via an API made and distributed from a non-CDC source, results may or may not be **100%** accurate*.

## How to Run the Docker Image

This will be a simple tutorial on how to get the image loaded into a container and running on your system. 

**NOTE: Just running the npm commands will not work with the files provided in this directory, pulling the docker image is needed**

1. Open up Docker Desktop and open terminal if you have Docker CLI running
1. Install the docker image via running: `docker pull flaccidthicc/covidtime`
1. Head back to Docker Desktop upon completion of the image download and follow these steps:
    - ![container-step-1](https://cdn.discordapp.com/attachments/654974735616049157/779265550596440064/Screen_Shot_2020-11-20_at_12.40.11_AM.png)
    - ![container-step-2](https://cdn.discordapp.com/attachments/654974735616049157/779266261112586260/Screen_Shot_2020-11-20_at_12.44.04_AM.png)
    - ![container-step-3](https://cdn.discordapp.com/attachments/654974735616049157/779266949816647690/Screen_Shot_2020-11-20_at_12.46.35_AM.png)
1. Once these steps are completed, head back to the Containers/Apps Tab
1. The container should be running, hover over the container and click 'Open in Browser'

You should now be able to see the three stats on `localhost:3000`

### Usage and Resources

Use this at your own risk, there is no warranty or services covering the use of this Docker Image. Base image running off Debian and also does not include any warranty.

**Resources**
With help from [Corona React Tutorial](https://www.youtube.com/watch?v=2FdrOfItOC0) and using API created by: [mathdriod](https://github.com/mathdroid) on Github with their [covid-19-api](https://github.com/mathdroid/covid-19-api).
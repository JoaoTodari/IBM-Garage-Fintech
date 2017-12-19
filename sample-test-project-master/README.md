# Running the functional tests

## Pre-requisites:

1. Install nightwatch by running the command `npm install -g nightwatch`

2. SauceLabs account

---

## Steps to run the tests on your machine:

1. Export the following two enviroment variables:
    ```
    export SAUCE_USER=<user>
    export SAUCE_KEY=<key>
    ```

    Replace `<user>` with the SauceLabs user id of the account created in 2.
    
    Replace `<key>` with the SauceLabs key for the account created in 2 (can be found in the user profile).
    
    
2. From the `tests/functional` folder, run the following command:
    ```
    nightwatch --config nightwatch.json
    ```

----   

## Configuring your DevOps pipeline to run the tests :

### Pre-requisites
- Copy the whole `tests` directory to your GitHub repository

### Configuring the pipeline

1. Create a new Stage to run the tests (you can name it `Functional tests`) 

2. On the `Jobs` tab in the Stage configuration: 
   - click `Add Job` 
   - select `Simple` for `Tester Type`
   - on the `Test script` field, add the following commands:
   
        ```
        npm install -g nightwatch
        cd tests/functional
        nightwatch --config nightwatch.json
        ```
    
    **Important:** The commands above assume that you maintained the directory structure as in the sample. If you have a different directory structure, change the first command `cd tests/functional` accordindgly.

3. On the `Environment properties` tab, add the following properties (as `Text Property`)

    |               |             | 
    | ------------- |-------------|
    | SAUCE_USER    | `<user>`    |
    | SAUCE_KEY     | `<key>`     |
    
    Replace `<user>` with the SauceLabs user id of the account created.
    
    Replace `<key>` with the SauceLabs key for the account created (this can be found in the user profile).

----

# Notes:

The configuration file (`nightwatch.json`) assumes that your **test scripts will be on the `scripts` directory**.
If your scripts are in a different folder, modify the following property in `nightwatch.json` (replace "scripts" with the directory where you have the test scripts):
```
"src_folders" : ["scripts"],
```
    


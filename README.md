# DEVFEST22 - `IOtERROR`

## `Team Members :`
- KEZIZ Mouayed
- HAMMOUTENE Amine
- BOUCHENACHA Moncef
- BOUZIDI nibras norelislam
- MOKHTARI Billal 


<br/><br/><br/>

## application 1 : `user application` 
#### `alows the user to`
- log in
- scan qr code to earn the reward (scan qr code from the carbage cane)
- used to know where to park

#### `build and install`


```
cd user-app
npm install
npx cap add android   # if ./android exists then there is no need to execute this
npx cap sync android
npx cap open android
```

<br/><br/>

## application 2 : `garbage collector application` 
#### `alows the garbage collector to`
- log in
- know the path to collect garbage from garbage canes that are full

#### `build and install`


```
cd garbage-collector-app
npm install
npx cap add android   # if ./android exists then there is no need to execute this
npx cap sync android
npx cap open android
```


<br/><br/>

## application 3 : `backend` 
#### `back`
- log in
- know the path to collect garbage from garbage canes that are full

#### `run server`

```
cd backend
npm install
npm start
```
<template>
    <div class=titleBlock>
        <div class="rightGreen">
            <div class="greenLine"></div>
        </div>
        <div class=leftBlock>
            <div class=whiteBlock></div>
            <div class="pinkBlock"></div>
            <div class="leftBlockBar"></div>
        </div>
    
        <div class="parentsOfText">
            <div class=titleText>{{title}}</div>
            <div class=titleDate>{{date}}</div>
        </div>
    
        <div class=rightBlock>
            <div class="rightBlockBar"></div>
            <div class=whiteBlock></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        date:{
            type: String,
            default: ""
        }
    }
}
</script>

<style scoped>
.titleBlock{
  animation-name:titleBlock;
  animation-timing-function: ease-out;
  animation-duration: 0.5s;
  /* animation-delay: 1s; */
  margin-right:40px;
  margin-left:40px;
  margin-top:6px;
  margin-bottom:16px;
  border: 2px solid;
  background: linear-gradient(to right,#98c7df 0%, #EA9FD0 100%);
  opacity: 0.7;
}

@keyframes titleBlock{
  0% {margin-right:40px; margin-left:40px;border: 2px solid;background: #fff;}
  50%{background: linear-gradient(to right,#98c7df 0%, #EA9FD0 100%);background-size: 0%; background-repeat: no-repeat;}
  100% {background: linear-gradient(to right,#98c7df 0%, #EA9FD0 100%);background-size: 100% ;background-repeat: no-repeat;}
}


.rightGreen{
  animation-name:rightGreen;
  animation-duration: 2s;
  animation-timing-function: ease-out;
  /* animation-delay: 1s; */
  float: right;
}

@keyframes rightGreen{
  0% {height: 0;width: 0px;}
  50% {height: 0;width: 0px;}
  100% {height: 60px; width: 60px;}
}

 .greenLine{
  animation-name:greenLine;
  animation-duration: 2s;
  animation-timing-function: ease-out;
  /* animation-delay: 1s; */
  border-top: 30px solid #447f95;  
  border-left: 30px solid transparent;  
  border-right: 30px solid #447f95;   
  border-bottom: 30px solid transparent; 
}

@keyframes greenLine{
  0% {border-top: 0px solid #447f95;  
  border-left: 0px solid transparent;  
  border-right: 0px solid #447f95;   
  border-bottom: 0px solid transparent;}
  50% {border-top: 0px solid #447f95;  
  border-left: 0px solid transparent;  
  border-right: 0px solid #447f95;   
  border-bottom: 0px solid transparent;}
  100% {border-top: 30px solid #447f95;  
  border-left: 30px solid transparent;  
  border-right: 30px solid #447f95;   
  border-bottom: 30px solid transparent; }
}

.leftBlock{
  width:10%;
  padding: 0;
  margin: 0;
  height: 24px;
}


.leftBlock .whiteBlock{
  width: calc(50% + 2px);
  padding: 0;
  margin: 0;
  background: white;
  height: 24px;
  transform: translateY(-2px) translateX(-2px);
}


.leftBlock .pinkBlock{
  animation-name:pinkBlock;
  animation-duration: 5s;
  animation-timing-function: ease-out;
  animation-iteration-count: infinite;
  animation-delay: 0.5s;
  top:0;
  width:50%;
  /* margin-left: calc(50% + 2px); */
  padding: 0;
  /* background: #E176bc; */
  height: 22px;
  transform: translateY(-24px) translateX(-2px);
}

@keyframes pinkBlock{
  0% {width: 0;margin: 0;background: #E176bc;}
  5% {width: 75%; margin: 0; background: #E176bc;}
  10% {width: 100%; margin: 0; background: #E176bc;}
  15% {width: 50%; margin-left: calc(50% + 2px); background: #E176bc;}
  88% {width: 50%; margin-left: calc(50% + 2px); background: #E176bc;}
  92% {width: 100%; margin: 0; background: #E176bc;}
  96% {width: 25%; margin: 0; background: #E176bc;}
  100% {width: 0}
}

.leftBlockBar{
  /* animation-name:leftBlockBar;
  animation-duration: 1s;
  animation-timing-function: ease-out; */
  border-bottom: solid 2px #000;
  transform: translateY(-24px) ;
}

/* @keyframes leftBlock{
  0% {transform: translateY(-48px)}
  100% {transform: translateY(-24px)}
} */

.parentsOfText{
  width:70%;
  margin-left:15%;
  margin-right:15%;
}

.titleText{
  animation-name:titleText;
  animation-duration: 0.3s;
  animation-timing-function: ease-out;
  text-align: center;
  word-wrap: break-word;
  font-size: 24px;
  font-weight:600;
}

@keyframes titleText{
  0% { opacity:0; }
	99% { opacity:0; }
	100% { opacity:1; }
}

.titleDate{
  animation-name:titleDate;
  animation-duration: 0.4s;
  animation-timing-function: ease-out;
  /* animation-delay: 2s; */
  top:0;
  font-size: 16px;
  color: #36485e;
  position: relative;
  float: right;
}
@keyframes titleDate{
  0% { opacity:0; }
	99% { opacity:0; }
	100% { opacity:1; }
}

.rightBlock{
  width:15%;
  padding: 0;
  margin-left: 85%;
  height: 24px;
}

.rightBlock .whiteBlock{
  width: calc(67% + 2px);
  padding: 0;
  margin: 0;
  background: white;
  height: 24px;
  transform: translateX(50%);
}

.rightBlockBar{
  border-bottom: solid 2px #000;
}
</style>

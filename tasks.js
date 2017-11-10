//   ЗАДАНИЕ 1
   function getFieldValues(array, str)
            {
                var Arr = new Array;
                for (let i=0; i< array.length;i++) 
                {Arr[i]=array[i][str];}
                Arr.sort();
                return Arr;
            }
            
           let usersData = [
	    { 'user' : 'Alex', 'password' : 'MyNameIsAlex' },
        { 'user' : 'Jen', 'password' : 'MyNAmeIsJen' },   //добавлен для проверки сортировки        
	    { 'user' : 'Bob', 'password' : 'MyNAmeIsBob' }        
            ];
      console.log(getFieldValues(usersData, 'user')); 
            
// ЗАДАНИЕ 2
            
            var numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];
            function isEven(x) {if (x%2==0) {return true;} else {return false;}}
            
            function filter(numbers, isEven)
            {
                var Arr = new Array;
                for (let i=0; i< numbers.length;i++)
                    {if (isEven(numbers[i])){Arr.push(numbers[i]);} }   
                     return Arr;
            }
           
       console.log(filter(numbers, isEven));  // --> [2, 8, 34] 
            
// ЗАДАНИЕ 3       
            var firstLongString = 'Load up on guns and bring your friends it is fun to lose and to pretend';
            var secondLongString = 'She is over bored and self assured oh no I know a dirty word';
            function findSimilarWords(str1, str2){
                let arr1=str1.split(' ');
                let arr2=str2.split(' ');
                var Arr = new Array;
                let Temp = new Array;
                if (arr2.length>arr1.length){ Temp=arr2; arr2=arr1; arr1=Temp;} // Чтобы проверка шла по более длинной строке
                for(let i=0; i<arr1.length; i++)
                    {
                        if (arr2.includes(arr1[i])) 
                            {
                                if (Arr.includes(arr1[i]) == false){Arr.push(arr1[i]);}
                                
                            }                    
                     }
                return Arr;
            }
            console.log(findSimilarWords(firstLongString, secondLongString)); // --> ['and', 'is'];
            
 
// ЗАДАНИЕ 4          
            
            var IpAddress = '10.223.98.2';
            var subnetMask = 28;  
            function cidrToNetMask(num)
            {
                let maskBinArr = [];
                let maskArr = [];
                let oct = 8;
                let inverse = [];
                let maskInv = [];

            for (i = 0; i < 32; i++)
                {
                if (num > 0){maskBinArr.push(1);}
                else{ maskBinArr.push(0);}          //Маска
                num --; 
                }

            for (i = 0; i < 32; i++) 
                {
                if(maskBinArr[i] == 0){inverse[i]=1;} 
                else {inverse[i]=0;}                //Инверсированная маска
                }

            for (i=0; i<32; i+=oct) 
                {
                maskArr.push(parseInt(maskBinArr.slice(i,i+oct).join(''), 2));
                maskInv.push(parseInt(inverse.slice(i,i+oct).join(''), 2));
                }

            return [maskArr, maskInv];
            }
            
            
            function generateBroadcastAndNetworsAddresses(ip, mask)
            {
                let ipArr = ip.split('.');
                let NetAddress = new Array;
                let Broadcast = new Array;
                if (ipArr.length!=4) {return false;}    // Проверка наличия 4х октетов
                for(let i=0; i<4; i++) {if (parseInt(ipArr[i])>255) {return false;}} // В каждом октете число меньше 255
                if (mask>32){return false;} // Маска не более 32
                var maskArr = cidrToNetMask(mask)[0];
                var inv = cidrToNetMask(mask)[1];
                
                for (i = 0; i < 4; i += 1)
                {
                NetAddress[i] = parseInt(ipArr[i]) & maskArr[i];        //Побитовое И между маской и данным IP-адресом
                }
                for (i = 0; i < 4; i += 1)
                {
                Broadcast[i] = NetAddress[i] | inv[i];                  //Побитовое ИЛИ между адресом сети и инверсированной маской.
                }
                
                var broadcastOut = Broadcast.join('.');
                var netAddressOut = NetAddress.join('.');
                return "Broadcast - " + broadcastOut + ", Network - " + netAddressOut;
            }   
            console.log(generateBroadcastAndNetworsAddresses(IpAddress, subnetMask));
            

        // ЗАДАНИЕ 5       
            var totalMessArray = [['a', 1, true], [true, 99, 'aa', undefined], ['1']];
            function makeItClean(totalMessArray) 
            {
                var Arr = new Array;
                for (let i=0; i< totalMessArray.length;i++) 
                { 
                Arr=Arr.concat(totalMessArray[i])
                }
                
                for(let i=0; i<Arr.length; i++)
                {
                let temp = Arr[i];
                Arr.splice(i, 1);
                if (Arr.includes(temp)==false) {Arr.push(temp)}
                }
                return Arr;
            }
            var Arr1=makeItClean(totalMessArray);
            console.log(makeItClean(totalMessArray));

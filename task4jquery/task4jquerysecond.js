var products={
    
    "Television":[
    {
   
    "name":"Samsung Lcd",
    "url_img":"images/lcd1.jpg",
    "category":"Television",
    "price":100
    },
   
    {
      
        "name":"Pation Pro",
        "url_img":"images/bike3.jpeg",
        "category":"bike",
        "price":1500
        }
    ],
    "Mobile":[
    {
   
    "name":"Redmi",
    "url_img":"images/mobile1.jpeg",
    "category":"Mobile",
    "price":200
    },
    {
        
        "name":"Nano",
        "url_img":"images/car2.jpeg",
        "category":"cars",
        "price":2500
        }
    
    
    ],
    
   
    "bike":[
    {
   
    "name":"apache",
    "url_img":"images/bike2.jpeg",
    "category":"bike",
    "price":1000
    },

    {
        
        "name":"Sony Lcd",
        "url_img":"images/lcd2.jpg",
       
        "category":"Television",
        "price":150
    }
    
    
    ],
    "cars":[
    {
   
    "name":"Alto",
    "url_img":"images/car1.jpeg",
    "category":"cars",
    "price":2000
    },
    {
        
        "name":"Motorola",
        "url_img":"images/mobile2.jpeg",
        "category":"Mobile",
        "price":400
        }
    
   
    ],
    "cloth":[
        {
        
        "name":"Jaket",
        "url_img":"images/jayket.jpg",
        "category":"cloth",
        "price":800
        },
        {
            
            "name":"Bulet",
            "url_img":"images/bike1.jpeg",
            "category":"bike",
            "price":300
            },
        {
        
        "name":"T-shirt",
        "url_img":"images/Tshirt.jpg",
        "category":"cloth",
        "price":300
        }

        ]


    }
    var tprice =0;
    
    for(var i in products)
    {
        products[i].forEach((item) => {
            tprice += item.price;
        });
    }
    
    
        $("#tp").html(`<h1>Total Price : Rs. ${tprice} </h1>`);
    
   
    var outputheder =$("#heder");
    var j=0;
    var newarray =[];
    for(var i in products)
    {
        newarray[j]=i;
    
         $(
           `<button value="${newarray[j]}")> ${newarray[j]} </button>`
           ).appendTo(outputheder);
    }
    var output= $("#pdiv");
    for(var i in products )
    {
        for(var j in products[i])
        {
            displayproduct();
        }
    }

    var filterproduct = $("#filterp");
    var clickitem = [];
    var deleteprod = new Array();
    var arr = new Array();
    var btnvalue =0;
    var removeprod = $("#removeproduct");
    $("button").on("click" ,function (){
         btnvalue = $(this).attr("value");
       
       if(jQuery.inArray(btnvalue, arr) !== -1)
        {
        
            $(this).removeClass('selected');
          
           arr.splice(arr.indexOf(btnvalue), 1);

        if(arr.length == 0)
        {
            window.location.reload();
        }
          
          filterproductitem();
           
        }
         else 
            {
               arr.push(btnvalue);
              
              filterproductitem();
            
              
              $(this).addClass('selected');
            }  
    });

  function displayproduct()
    {
        $(`<div class="flex-container">
        <div><p>${products[i][j].name }</p>
        <img src=" ${products[i][j].url_img}" id="imgid">
        <p>${products[i][j].price }</p>
        </div>
      </div>`).appendTo(output);
    }
    function filterproductitem()
    { 
        tprice=0;
        $("#pdiv").html("");
        $("#filterp").html("");
        $("#tp").html("");
        for(var t in arr)
         {
                for(var i in products )
                {
                    for(var j in products[i])
                    {
                       
                                if(arr[t] == products[i][j].category )
                                {
                                    tprice = tprice + products[i][j].price ;
                                    $("#tp").html(`<h1>Total Price : Rs. ${tprice} </h1>`);
                                            $(`<div class="flex-container">
                                            <div><p>${products[i][j].name }</p>
                                            <img src=" ${products[i][j].url_img}" id="imgid">
                                            <p>${products[i][j].price }</p>
                                            </div>
                                            </div>`).appendTo(filterproduct);
                                }
    
                    }
                }
         } 
        
    }
  


(function(){
    window.addEventListener('DOMContentLoaded', ()=>{
        var clear = 0;
        document.querySelector('.budget__balance').textContent = `- ${clear.toFixed(2)}`;
    
        document.querySelector('.budget__income--value').textContent = `+ ${clear.toFixed(2)}`;
    
        document.querySelector('.budget__expenses--value').textContent = `- ${clear.toFixed(2)}`;
    
        document.querySelector(".budget__expenses--percentage").textContent = '__';
    
        // document.querySelector('.income__update__details').innerHTML = '';
    
        // document.querySelector('.expenses__update__details').innerHTML = '';
    
    
    
    })
    
    var balance,income,expense,expensesPercentage;
    
    balance = 0;
    income = 0;
    expenses = 0;
    expensesPercentage = 0;
    
    var allBudget = [];
    
    var incomeList =[];
    
    var expenseList = [];
    
    
    function Budget(id ,name, value, type){
        this.id = id;
        this.name = name;
        this.value = parseInt(value);
        this.type = type;
        this.percentage = 0;
    }
    
    Budget.prototype.percentageCalc = function(income){
        if (income !== 0){
            this.percentage = Math.ceil((this.value/income)*100)
        }
    }
    
    var id = 0;
    // submit ///////////////////////////////////////////////////////////////////////////////
    
    document.querySelector('.input--adder').addEventListener('click', function(){
        // add to all budget list
        allBudgetListUpdate();
        console.log(allBudget);
    
        if (allBudget.length !== 0){
            budgetValueUpdate(allBudget);
    
            display();
    
            console.log('id is '+ id)
        }
    
    });
    //submit ends /////////////////////////////////////////////////////////////////////////

    // delete btn ///////////////////////////////////////////////////////////////////////
    window.addEventListener('mousemove',function(){
        if (allBudget.length !== 0){
        
            var deleteBtn = document.querySelectorAll('.remove');
    
            deleteBtn.forEach( ele => {
    
                ele.addEventListener('click', function(){
                    
                    let eleId = this.classList[2];
    
                    allBudget = allBudget.filter(ele => ele.id !== parseInt(eleId))
    
                    console.log(allBudget)
    
                    budgetValueUpdate(allBudget)
    
                    display()
    
                })
            });
        }
    })
    
    // delete btn end///////////////////////////////////////////////////////////////////////
    
    
    function budgetValueUpdate(arr){
    
        income = sumTotal(calcBudget(arr, incomeTest));
    
        expense = sumTotal(calcBudget(arr, expensesTest));

        // console.log('expenses is ' + expense)
        if (income !== 0){
            expensesPercentage = (expense/income) * 100;
        }
        // console.log(expensesPercentage)
        
        balance = income - expense;
        // console.log('balance is ' + balance)
    
        percentageUpdate(arr, income)
    
    }
    
    // function to parse(display) values to Html
    function display(){
        document.querySelector('.budget__balance').textContent = balance > 0 ? `+ ${balance.toFixed(2)}`:`- ${(-balance).toFixed(2)}`; 
        document.querySelector('.budget__income--value').textContent = `+ ${income.toFixed(2)}`;
        document.querySelector('.budget__expenses--value').textContent = `- ${expense.toFixed(2)}`;
        document.querySelector('.budget__expenses--percentage').textContent = `${Math.ceil(expensesPercentage)}%`;
    
        document.querySelector('.income__display').innerHTML = setGrid(allBudget, 'income');
    
        document.querySelector('.expenses__display').innerHTML = setGrid(allBudget, 'expenses');
    }
    
    // function to map budget to the html 
    function setGrid(arr, kind){
        var grid;

        if (kind === 'income'){
    
            var incomeFiltered = arr.filter(ele => ele.type == 'increase');
            // incomeList = incomeFiltered
            grid =  incomeFiltered.map(function(s){
                return `
                    <div class="${kind}__update__details">
                        <p class="${kind}__update__details--name">${s.name}</p>
                        <p class="${kind}__update__details--value">+${s.value.toFixed(2)}</p>
                        <button class="${kind}__update__removal remove ${s.id}">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
                            </svg>
                        </button>
                    </div>`
            })
        }else if( kind === 'expenses'){
            var expensefiltered = arr.filter(ele => ele.type == 'decrease');
            // expenseList = expensefiltered
            grid = expensefiltered.map(function(s){
                return `
                    <div class="${kind}__update__details">
                        <p class="${kind}__update__details--name">${s.name}</p>
                        <p class="${kind}__update__details--value">- ${s.value.toFixed(2)}</p>
                        <p class="${kind}__update__details--percentage">${Math.ceil(s.percentage)}%</p>
                        <button class="${kind}__update__removal remove ${s.id}">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
                            </svg>
                        </button>
                    </div>`
            })
        }
        // console.log(filteredValue);
        return grid.join('');
    }
    
    function calcBudget(arr, test){
        var values = [];
        if (arr.length !== 0){
            for (var element of arr){
                values.push(test(element))
            }
        }
        return values
    }
    
    // function balanceTest(arr){
    //     return arr.type === 'increase'? +arr.value : -arr.value;
    // }
    
    function incomeTest(arr){
        if (arr.type === 'increase'){
            return arr.value
        }else return 0;
    }
    
    function expensesTest(arr){
        if (arr.type === 'decrease'){
            return arr.value
        }else return 0;
    }
    
    
    function sumTotal(arr){
        var sum = 0;
        for (var element of arr){
            sum +=element
        }
        return sum
    }
    
    
    function allBudgetListUpdate(){
        var budgetName = document.querySelector('.input--text').value;
        var budgetValue = document.querySelector('.input--amount').value;
        var budgetType = document.querySelector('.input__type').value
        if (budgetValue !== '' && budgetName !== ''){
            var newBudget = new Budget( id, budgetName, budgetValue, budgetType);
            allBudget.push(newBudget);
            id +=1; 
        }
    
        // clearing input
        document.querySelector('.input--text').value = '';
        document.querySelector('.input--amount').value = '';
    }
    
    function percentageUpdate(listOfBudget, incomeValue){
        for (var ele of listOfBudget){
            if(ele.type === 'decrease'){
                ele.percentageCalc(incomeValue)
            }
        }
    };

})();


// console.log(sumTotal([1,-2]))


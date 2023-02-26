function AllExpance(elementId){
    const AllExpancevalue=document.getElementById(elementId);
    const AllExpanceString=AllExpancevalue.value;
    const AllExpance=parseFloat(AllExpanceString);
    // AllExpancevalue.value="";
    return AllExpance
    
    
}

function CalculetionValueById(elementId,value){
    const TotalExpanceValue=document.getElementById(elementId);
      TotalExpanceValue.innerText=value

}
document.getElementById('all-expance').addEventListener('click',function(){
    const foddExpanse=AllExpance('fodd');
    const rentExpanse=AllExpance('rent');
    const clothExpanse=AllExpance('cloth');
    const TotalIncome=AllExpance('income')
//    total expance
    const totalExpanse=foddExpanse+rentExpanse+clothExpanse;
    CalculetionValueById('total-expance',totalExpanse)
    // total blance
    const CurrentBlace=TotalIncome-totalExpanse;
    CalculetionValueById('curren-blance',CurrentBlace)    
})
// saving section
document.getElementById('save-amount-button').addEventListener('click',function(){
    const SavingAmount=AllExpance('save-amount-value');
    const TotalIncome=AllExpance('income')
    const CurrenSavingAmount=(TotalIncome*SavingAmount)/100;
    CalculetionValueById('save-amount',CurrenSavingAmount)
    // remainBlance
    const CurrentBlanceVlaue=document.getElementById('curren-blance');
    const CurrentBlanceVlaueString=CurrentBlanceVlaue.innerText;
    const CurrenBlance=parseFloat(CurrentBlanceVlaueString);
    const CurrentRemainBlance=CurrenBlance-CurrenSavingAmount;
    CalculetionValueById('remaining-amount',CurrentRemainBlance)
})

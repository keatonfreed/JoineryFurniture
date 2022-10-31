


function email() {


    let preFilled = `This is a pre-written email to Joinery Furniture, feel free to remove or change what is here. =Please submit your request below:==Give a brief summary of what you would like:====Please Describe the dimensions of the item:====How would you like us to contact you?===`

    preFilled = preFilled.replace(/=/g, "%0D")


    window.open(`https://mail.google.com/mail/u/0/?fs=1&to=joineryfurnituretest@gmail.com&su=Joinery Furniture Request&body=${preFilled}&tf=cm`)

    // if(!(/(.+)@(.+){2,}\.(.+){2,}/.test(userEmail)) || !userText) {
}



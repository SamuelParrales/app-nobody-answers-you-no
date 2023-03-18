const $generatorForm = document.getElementById('generator-form');
const $copyText = document.querySelector('.copy-text');
const $formCopyText = document.getElementById('form-copy-text');




const onChangeInputForm =function(e)
{
    const $spanCopied = $copyText.querySelector('.span-copied');
    $spanCopied.classList.remove('active');

    if(this.question.value && this.answer.value)
        return this.querySelector('.btn-generator').disabled = false;
    
        this.querySelector('.btn-generator').disabled = true;
}
const onGenerateLink = function(e){
    e.preventDefault();
    const $btnCopied = $copyText.querySelector('.btn-copied'),
    searchParams = new URLSearchParams();

    let question = this.question.value;
    answer = this.answer.value;
    searchParams.append('question',question);
    searchParams.append('answer',answer);
    link= `${location.href}/dialog-box.html?${searchParams.toString()}`
    
    
    $formCopyText.link.value =link;
    $btnCopied.disabled = false;
}
const onCopyLink = function(e)
{
    e.preventDefault();
    const $spanCopied = $copyText.querySelector('.span-copied');
    this.link.disabled = false;
    this.link.select(); 
    this.link.disabled = true;
    document.execCommand('copy');
    $spanCopied.classList.add('active')
}




// Events
$generatorForm.addEventListener('submit',onGenerateLink) ;
$generatorForm.addEventListener('input',onChangeInputForm);
$formCopyText.addEventListener('submit',onCopyLink);

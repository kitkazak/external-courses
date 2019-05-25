function debounce(func) {
    let timer = null;
  
    return function() {
        var args = [].slice.call(arguments);
        const onComplete = () => {
            func.apply(this, args);
            timer = null;
        }
  
        if (timer) {
            clearTimeout(timer);
        }
  
        timer = setTimeout(onComplete, 500);
    };
}
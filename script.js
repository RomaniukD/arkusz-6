const oblicz = () => {
    let liczbaA = document.getElementById('liczba').value;
    let liczbaB ="";
    liczbaB = liczbaA%2;
    liczbaA = Math.floor(liczbaA/2);
    if(liczbaA == 0) {
        liczbaB=liczbaB.reverse();
    }
    document.getElementById('wynik').innerHTML(liczbaA);
}

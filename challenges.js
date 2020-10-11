"use strict"
let numberArray1 = [];
let numberArray2 = [];
let l = 2;
let i1,i,a,a1,b,c,x,x1,x2,xid,xidr,xidc,i11,whieSayısı,i87,a87,uzunluk,aid,aidc,aidr,i99,enBasKare;
let kacEleman = Number(prompt("How many factors will there be? Please do not enter a value less than 3 and not an integer. (The number of elements in both arrays are the same.):"));
if (kacEleman < 3) {
    throw new Error("NUMBER OF ELEMENTS CANNOT BE 2 OR LESS")
}
let table = document.createElement("table");
let tbody = document.createElement("tbody");
let div = document.getElementById("biggerdiv");
let button = document.getElementById("button1");
let button2 = document.getElementById("button2");
let target = 24;
let indexC = 0;
let newLeftNumbers = [];
let newLeftNumbersMutlak = [];
let newLeftNumbersMutlak2 = [];
let sayım = 0;
let closestOnesIndex = [];
let i109 = 0;
table.appendChild(tbody);
div.appendChild(table);
if (typeof kacEleman !== 'undefined' && typeof kacEleman !== null) {
    for (i1 = 0; i1 < kacEleman; ++i1) {
        numberArray1[i1] = Number(prompt("First Set " + (i1 + 1) + "." + " Factor"));
    }
}
if (typeof kacEleman !== 'undefined' && typeof kacEleman !== null) {
    for (i1 = 0; i1 < kacEleman; ++i1) {
        numberArray2[i1] = Number(prompt("Second Set " + (i1 + 1) + "." + " Factor"));
    }
}
numberArray1.sort(function (a, b) { return a - b });
numberArray2.sort(function (a, b) { return a - b });
console.log(numberArray1);
console.log(numberArray2);
if (typeof kacEleman !== 'undefined' && typeof kacEleman !== null) {
    for (i = 0; i < (kacEleman + 1); ++i) {
        let tr = document.createElement("tr");
        tbody.appendChild(tr);
        for (a = 0; a < (kacEleman + 1); ++a) {
            let td = document.createElement("td");
            td.id = "r" + (i + 1) + "c" + (a + 1);
            td.setAttribute("style", "background-color:blue;")
            tr.appendChild(td);
            td.innerHTML = "_";
        }
    }
}
if (typeof kacEleman !== 'undefined' && typeof kacEleman !== null) {
    for (b = 1; b <= kacEleman; ++b) {
        for (c = 0; c < kacEleman; ++c) {
            document.getElementById("r" + (l) + "c" + b).innerHTML = numberArray1[(c)];
            document.getElementById("r" + (l) + "c" + b).setAttribute("style", "background-color:pink;")
            ++l;
        }
        break;
    }
}
l = 2;
if (typeof kacEleman !== 'undefined' && typeof kacEleman !== null) {
    for (b = 1; b <= kacEleman; ++b) {
        for (c = 0; c < kacEleman; ++c) {
            document.getElementById("r" + (b) + "c" + l).innerHTML = numberArray2[(c)];
            document.getElementById("r" + (b) + "c" + l).setAttribute("style", "background-color:pink;")
            ++l;
        }
        break;
    }
}
button.addEventListener("click", function (e) {
    if (typeof kacEleman !== 'undefined' && typeof kacEleman !== null) {
        x1 = Math.round(Math.random() * (kacEleman + 1));
        x2 = Math.round(Math.random() * (kacEleman + 1));
        while ((((x1 === 0) || (x2 === 0)) || ((x1 === 1) && (x2 === 1))) || (document.getElementById("r" + x1 + "c" + x2).innerHTML != "_")) {
            x1 = Math.round(Math.random() * (kacEleman + 1));
            x2 = Math.round(Math.random() * (kacEleman + 1));
            if (typeof document.getElementById("r" + x1 + "c" + x2).innerHTML == "number") {
                break;
            }
        }
        x = Number(document.getElementById("r1" + "c" + x2).innerHTML) + Number(document.getElementById("r" + x1 + "c1").innerHTML);
        let y = document.getElementById("r" + x1 + "c" + x2);
        y.innerHTML = x;
        if (x > target) {
            xid = y.id.split("");
            xidr = Number(xid[1]);
            xidc = Number(xid[3]);
            //kacEleman is the last number of r and c.
            if ((((xidr !== (kacEleman + 1))) || ((xidc !== (kacEleman + 1)))) || (((xidr !== (kacEleman + 1))) && ((xidc !== (kacEleman + 1))))) {
                for (i11 = (kacEleman + 1); i11 >= xidr; --i11) {
                    for (a1 = (kacEleman + 1); a1 >= xidc; --a1) {
                        document.getElementById("r" + i11 + "c" + a1).setAttribute("style", "background-color:orange;");
                    }
                }
            }
        } else if (x < target) {
            xid = y.id.split("");
            xidr = Number(xid[1]);
            xidc = Number(xid[3]);
            for (i11 = 1; i11 <= xidr; ++i11) {
                for (a1 = 1; a1 <= xidc; ++a1) {
                    document.getElementById("r" + i11 + "c" + a1).setAttribute("style", "background-color:orange;");
                }
            }
        } else if (x === target) {
            xid = y.id.split("");
            xidr = Number(xid[1]);
            xidc = Number(xid[3])
            console.log("Target found : " + "(" + document.getElementById("r1" + "c" + xidc).innerHTML + ")" + "," + "(" + document.getElementById("r" + xidr + "c1").innerHTML + ")" +" With this id: " + "r" + xidr + "c" + xidc);
            let p = document.createElement("p");
            document.body.appendChild(p);
            p.setAttribute("style","float:right;color:white;");
            p.innerHTML = "<br>" + " Target found : " + "(" + document.getElementById("r1" + "c" + xidc).innerHTML + ")" + "," + "(" + document.getElementById("r" + xidr + "c1").innerHTML + ")" +" With this id: " + "r" + xidr + "c" + xidc + "<br>" + "</br>";
        }
    }
})
function mutlakDeger(L) {
    if (L > target) {
        return L - target;
    }else if (target > L) {
        return target - L;
    }else if (L === target) {
        return 0;
    }else {
        return 0;
    }
}
button2.addEventListener("click", function () {
    if (typeof kacEleman !== 'undefined' && typeof kacEleman !== null) {
        for (i87 = 1; i87 <= (kacEleman + 1); ++i87) {
            for (a87 = 1; a87 <= (kacEleman + 1); ++a87) {
                if (i87 === 1 && a87 === 1) {
                    continue;
                }
                if (typeof (document.getElementById("r" + i87 + "c" + a87).innerHTML) !== 'undefined' && document.getElementById("r" + i87 + "c" + a87).innerHTML !== null) {
                    if (document.getElementById("r" + i87 + "c" + a87).getAttribute("style") === "background-color:blue;") {
                        let y = document.getElementById("r" + i87 + "c" + a87);
                        x = Number(document.getElementById("r1" + "c" + a87).innerHTML) + Number(document.getElementById("r" + i87 + "c1").innerHTML);
                        y.innerHTML = x;
                        newLeftNumbers[indexC] = x;
                        ++indexC;
                    }
                }
            }
        }
        uzunluk = newLeftNumbers.length;
        for(i99=0;i99<uzunluk;++i99) {
            newLeftNumbersMutlak[i99] = mutlakDeger(newLeftNumbers[i99]);
            newLeftNumbersMutlak2[i99] = newLeftNumbersMutlak[i99];
        }
        newLeftNumbersMutlak2.sort(function(a, b){return b-a})
        console.log(newLeftNumbersMutlak2);
        newLeftNumbersMutlak.find(finding);
        for(i=1;i<(kacEleman+1);++i) {
            for(a=1;a<(kacEleman+1);++a) {
                if (i === 1 && a === 1) {
                    continue;
                }
                if (typeof (document.getElementById("r" + i + "c" + a).innerHTML) !== 'undefined' && document.getElementById("r" + i + "c" + a).innerHTML !== null) {
                    for(i87=0;i87<closestOnesIndex.length;++i87) {
                        if (document.getElementById("r" + i + "c" + a).getAttribute("style") === "background-color:blue;" && Number(document.getElementById("r" + i + "c" + a).innerHTML) === newLeftNumbers[closestOnesIndex[i87]]) {
                            if((document.getElementById("r" + i + "c" + a).innerHTML) !== "_") {
                                let K = document.getElementById("r" + i + "c" + a);
                                let array2 = K.id.split("");
                                let array2idr = array2[1];
                                let array2idc = array2[3];
                                console.log("Nearest target(s) found at: " + "(" + document.getElementById("r1" + "c" + array2idc).innerHTML + ")" + "," + "(" + document.getElementById("r" + array2idr + "c1").innerHTML + ")"+" With this id: " + "r" + array2idr + "c" + array2idc);
                                let p = document.createElement("p");
                                document.body.appendChild(p);
                                p.setAttribute("style","float:right;color:white;");
                                p.innerHTML = "<br>"+ " Nearest target(s) found at: " + "(" + document.getElementById("r1" + "c" + array2idc).innerHTML + ")" + "," + "(" + document.getElementById("r" + array2idr + "c1").innerHTML + ")"+" With this id: " + "r" + array2idr + "c" + array2idc +"<br>" +"</br>";
                            }
                        }
                    }
                }else {
                    continue;
                }    
            }
        }
    }
})
enBasKare = document.getElementById("r1c1");
enBasKare.setAttribute("style","background-color:pink;")
function finding(x,y) {
    if (x === newLeftNumbersMutlak2[uzunluk-1]) {
        closestOnesIndex[i109] = y;
        ++i109;
    }
}
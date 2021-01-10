function palindrome(str) {
    let forward = str.toLowerCase().match(/[a-z0-9]/g).join("");
    let reverse = "";
    for (let i = 0; i < forward.length; i++) {
        reverse = forward[i] + reverse;
    }

    if (forward === reverse) {
        return true;
    } else {
        return false;
    }
}

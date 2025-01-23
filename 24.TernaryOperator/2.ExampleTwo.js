let password = "Mahesh-123";

function passwordChecker(ps){
    return ps.length >= 8 ? "Strong password" : "Weak password";
} 

const res = passwordChecker(password);
console.log(res);
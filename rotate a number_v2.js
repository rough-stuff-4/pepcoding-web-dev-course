// ROTATE A NUMBER
function cal_no_of_digits(n) {
  let no_of_digits = 0;
  while (Math.abs(n) >= 1) {
    n /= 10;
    no_of_digits++;
  }
  return no_of_digits;
}
function solve(n, k) {
  let no_of_digits = cal_no_of_digits(n);
  if (k == 0) return n;
  if (k < 0) {
    let start_k_dig_num = Math.floor(n / Math.pow(10, no_of_digits - -k));
    let rem_num = Math.floor(n % Math.pow(10, no_of_digits - -k));
    let new_num = rem_num * Math.pow(10, -k) + start_k_dig_num;
    return new_num;
  } else {
    let first_n_minus_k_rem_no = Math.floor(n / Math.pow(10, k));
    let rem_num_of_k_dig = Math.floor(n % Math.pow(10, k));
    let new_num = rem_num_of_k_dig * Math.pow(10, no_of_digits - k) +  first_n_minus_k_rem_no;
    return new_num;
  }
}

function ans_wrapper(n, k) {
  if (
    Math.abs(n) != Math.floor(Math.abs(n)) ||
    Math.abs(k) != Math.floor(Math.abs(k))
  )
    return "Invalid";
  if (k == 0 || n == 0) return n;
  let is_minus = false;
  let digits_in_n = cal_no_of_digits(n);
  k = k % digits_in_n;
  if (n < 0) {
    is_minus = true;
    n = -n;
  }
  let rotated_num = solve(n, k),
    ans = "";
  let digits_in_ans = cal_no_of_digits(rotated_num);
  for (let i = 0; i < digits_in_n - digits_in_ans; i++) {
    ans += "0";
  }
  ans = ans + rotated_num;
  if (is_minus) return "-" + ans;
  return ans;
}

console.log(ans_wrapper( 0 , 0));

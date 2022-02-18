#include <iostream>
#include <cmath>
#include <bits/stdc++.h>

using namespace std;

void solve(string n , string k);
int main(){
    string n,k;
    cin>>n>>k;
    solve(n,k);
    //write your code here
    return 0;
}

void solve(string n , string k){
    
    int len = n.length();
    int n_t = stoi(n);
    
    string  p1, p2 , ans = n;
    int k_int = stoi(k);
    k_int = k_int%len;
    if(k_int<0){
        p1 = n.substr(0, -(k_int));
        p2 = n.substr(-(k_int) , len - k_int );
        ans = p2+p1;
    } else if(k_int>0){
        p1 = n.substr(0, len-k_int);
        p2 = n.substr(len - k_int, k_int );
        ans = p2+p1;
    }
    int no_of_digits_in_ans = 0;
    while(n_t>=1){
        n_t=n_t/10;
        no_of_digits_in_ans++;
    }
    string ans_str = "";
    // for(int i=0 ; i< len - no_of_digits_in_ans; i++ ) ans_str+="0";
    // cout << ans_str ;
    cout << (ans);
}


#include <bits/stdc++.h>
using namespace std;

void sumofallsubarrays(int n)
{
    int a[n];
    for (int k = 0; k < n; k++)
    {
        cin >> a[k];
    }
    int curr = 0;
    for (int i = 0; i < n; i++)
    {
        int curr = 0;
        for (int j = i; j < n; j++)
        {
            curr = curr + a[j];
            cout << a[j] << endl;
        }
    }
}

int main()
{
    int n;
    cin >> n;
    sumofallsubarrays(n);
    return 0;
}

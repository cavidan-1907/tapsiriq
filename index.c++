#include <iostream>
#include <sstream>
#include <vector>
using namespace std;
int sumNum(int n) {
    int sum = 0;
    while (n > 0) {
        sum += n % 10;
        n /= 10;
    }
    return sum;
}

void calculateMaxDigitSum(const string& numInput) {
    istringstream iss(numInput);
    vector<int> numArray;
    int num;
    while (iss >> num) {
        numArray.push_back(num);
    }

    int maxSum = -1;
    int maxNum = -1;

    for (int num : numArray) {
        int sum = sumNum(num);
        if (sum > maxSum) {
            maxSum = sum;
            maxNum = num;
        }
    }
    if (maxNum != -1) {
        cout << "Rəqəmləri cəmi ən böyük olan ədəd: " << maxNum << endl;
        cout << "Ədədlər: ";
        for (int num : numArray) {
            cout << num << " ";
        }
        cout << endl;
    }
}

int main() {
    string numInput;
    cout << "Ədədləri aralarında boşluq olaraq daxil edin: ";
    getline(cin, numInput);
    if (numInput.empty()) {
        cerr << "ədədləri daxil edinki tapaq!" << endl;
        return 1;
    }

    calculateMaxDigitSum(numInput);

    return 0;
}

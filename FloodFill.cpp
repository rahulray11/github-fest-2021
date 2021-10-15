#include<iostream>
#define M 8
#define N 8
using namespace std;

int screen[M][N] = {  
   {1, 1, 1, 1, 1, 1, 1, 1},
   {1, 1, 1, 1, 1, 1, 0, 0},
   {1, 0, 0, 1, 1, 0, 1, 1},
   {1, 2, 2, 2, 2, 0, 1, 0},
   {1, 1, 1, 2, 2, 0, 1, 0},
   {1, 1, 1, 2, 2, 2, 2, 0},
   {1, 1, 1, 1, 1, 2, 1, 1},
   {1, 1, 1, 1, 1, 2, 2, 1}
};

void fillScreen(int x, int y, int prevColor, int newColor) {   
   if (x < 0 || x >= M || y < 0 || y >= N)   
      return;

   if (screen[x][y] != prevColor)
      return;

   screen[x][y] = newColor;   
   fillScreen(x+1, y, prevColor, newColor);   
   fillScreen(x-1, y, prevColor, newColor);    
   fillScreen(x, y+1, prevColor, newColor);    
   fillScreen(x, y-1, prevColor, newColor);   
  }

void floodFill(int x, int y, int newColor) {
   int prevColor = screen[x][y];    
   fillScreen(x, y, prevColor, newColor);
}

int main() {
   int x = 4, y = 4, newColor = 3;
   cout << "Previous screen: "<< endl;
   for (int i=0; i<M; i++) {
      for (int j=0; j<N; j++)
         cout << screen[i][j] << " ";
      cout << endl;
   }
   cout << endl;
   floodFill(x, y, newColor);  

   cout << "Updated screen: "<< endl;
   for (int i=0; i<M; i++) {
      for (int j=0; j<N; j++)
         cout << screen[i][j] << " ";
      cout << endl;
   }
}

#include<stdio.h>
#include<stdlib.h>
#include<math.h>
int main(void)
{
int a,b,r;
printf("entrer deux nombres");
scanf("%d,%d",&a,&b);
if(a>b)
{
do
{
r==a%b;
a==b;
b==r;
}
while(r==0);
}
printf("le pgcd de %d et de %d est %d",a,b,r);
}

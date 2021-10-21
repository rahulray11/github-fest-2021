#include <stdio.h>
#include <stdlib.h>
	
/* TIPO ESTRUTURADO */
typedef struct No{
	struct No* esq;
	int info;
	struct No* dir;
}Arv;

int tipo;
Arv* encontra_No(Arv* r, int v){	
	if(r == NULL){ /* Árvore vazia */
		return NULL;
	}else{
		if(v <= r->info){ /* Novo nó deve ficar a esquerda de r */
			if(r->esq == NULL){
				return r;
			}else{
				return encontra_No(r->esq, v);
			}
		}else{ /* Novo nó deve ficar a direita de r */
			if(r->dir == NULL){
				return r;
			}else{
				return encontra_No(r->dir, v);
			}
		}
	}
}


int ImprimeArvore(Arv *r){
	if(r != NULL){
		if(tipo == 1){
			printf(" %d", r->info);
			ImprimeArvore(r->esq);
			ImprimeArvore(r->dir);
		}
		if(tipo == 2){
			ImprimeArvore(r->esq);
			printf(" %d", r->info);
			ImprimeArvore(r->dir);
		}
		if(tipo == 3){
			ImprimeArvore(r->esq);
			ImprimeArvore(r->dir);
			printf(" %d", r->info);
		}
	}
	return 0;
}

int main(){
	Arv *raiz, *pai, *aux;
	int Tam, Ncasos, c, d, noh;

	raiz = NULL;
	scanf("%d", &Ncasos);	

	for(c=1; c<=Ncasos; c++){
		raiz = NULL;

		scanf("%d", &Tam);
		for(d=0; d<Tam; d++){
			scanf("%d", &noh);

			aux = (Arv *) malloc(sizeof(Arv));
			aux->info = noh;
			aux->esq = NULL;
			aux->dir = NULL;	

			pai = encontra_No(raiz, noh);
			if(pai == NULL)
				raiz = aux;
			else
			
				if(noh <= pai->info)
					pai->esq = aux;
				else
					pai->dir = aux;
		}
		
		printf("Case %d:", c);
	
		printf("\nPre.:");
		tipo = 1;
		ImprimeArvore(raiz);
	
		printf("\nIn..:");
		tipo = 2;
		ImprimeArvore(raiz);
	
		printf("\nPost:");
		tipo = 3;
		ImprimeArvore(raiz);
	
		printf("\n\n");
	}
	return 0;
}

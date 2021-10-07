package com.nishchay.connect3game;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;

public class MainActivity extends AppCompatActivity {

    public void dropin(View view) {
        ImageView counter = (ImageView) view;
        counter.setTranslationY(-1500);
        counter.setImageResource(R.drawable.yellow);
        counter.animate().translationYBy(1500).setDuration(300);

    }


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
}
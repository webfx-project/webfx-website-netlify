package com.example.memorygame;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.Region;
import javafx.stage.Stage;

import java.io.IOException;

public class Main extends Application {

    private static final BorderPane borderPane = new BorderPane();

    @Override
    public void start(Stage stage) throws IOException {
        //FXMLLoader fxmlLoader = new FXMLLoader(Main.class.getResource("memory-game.fxml"));
        //Scene scene = new Scene(fxmlLoader.load());
        Scene scene = new Scene(borderPane, null);
        scene.getStylesheets().setAll(WebFXUtil.toUrl("styles.css"));
        setView(new FxmlMemoryGame()._view);
        stage.setTitle("Memory Game");
        stage.setScene(scene);
        stage.show();
    }

    static void setView(Region view) {
        borderPane.setCenter(view);
    }

    public static void main(String[] args) {
        launch();
    }
}
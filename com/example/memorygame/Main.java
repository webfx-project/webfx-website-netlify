package com.example.memorygame;

import dev.webfx.platform.resource.Resource;
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.stage.Stage;

import java.io.IOException;

public class Main extends Application {
    @Override
    public void start(Stage stage) throws IOException {
        //FXMLLoader fxmlLoader = new FXMLLoader(Main.class.getResource("memory-game.fxml"));
        //Scene scene = new Scene(fxmlLoader.load());
        Scene scene = new Scene(new FxmlMemoryGame()._view, null);
        scene.getStylesheets().setAll(WebFXUtil.toUrl("styles.css"));
        stage.setTitle("Memory Game");
        stage.setScene(scene);
        stage.show();
    }

    public static void main(String[] args) {
        launch();
    }
}
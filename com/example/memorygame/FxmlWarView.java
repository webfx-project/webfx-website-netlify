package com.example.memorygame;

import javafx.scene.control.Button;
import javafx.scene.layout.HBox;
import javafx.geometry.Insets;
import javafx.scene.control.Label;
import javafx.scene.layout.AnchorPane;
import javafx.scene.image.ImageView;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.VBox;
import javafx.scene.image.Image;

import static javafx.geometry.Pos.CENTER;


public final class FxmlWarView {
	public WarController _controller;
	public AnchorPane _view;
	public FxmlWarView() {
		_controller = new WarController();
		AnchorPane ctrl_1 = new AnchorPane();
		ctrl_1.setMaxHeight(600.0);
		//ctrl_1.getStylesheets().add(toUrl("styles.css"));
		ctrl_1.setMaxWidth(1000.0);
		VBox ctrl_2 = new VBox();
		ctrl_2.setPrefHeight(600.0);
		AnchorPane.setTopAnchor(ctrl_2, 0.0);
		ctrl_2.setSpacing(20.0);
		ctrl_2.setPrefWidth(1063.0);
		AnchorPane.setRightAnchor(ctrl_2, 0.0);
		AnchorPane.setLeftAnchor(ctrl_2, 0.0);
		ctrl_2.setAlignment(CENTER);
		AnchorPane.setBottomAnchor(ctrl_2, 0.0);
		BorderPane ctrl_3 = new BorderPane();
		ctrl_3.setPrefWidth(200.0);
		ctrl_3.setLayoutX(30.0);
		ctrl_3.setLayoutY(430.0);
		Label ctrl_4 = new Label();
		ctrl_4.setTextFill(null);
		BorderPane.setAlignment(ctrl_4, CENTER);
		ctrl_4.setText("Player 1");
		Insets ctrl_5 = new Insets(60.0);
		ctrl_4.setPadding(ctrl_5);
		ctrl_3.setLeft(ctrl_4);
		Label ctrl_6 = new Label();
		ctrl_6.setTextFill(null);
		BorderPane.setAlignment(ctrl_6, CENTER);
		ctrl_6.setText("Player 2");
		Insets ctrl_7 = new Insets(80.0);
		ctrl_6.setPadding(ctrl_7);
		ctrl_3.setRight(ctrl_6);
		HBox ctrl_8 = new HBox();
		ctrl_8.setSpacing(20.0);
		ImageView ctrl_9 = new ImageView();
		//ctrl_9.setPickOnBounds(true);
		ctrl_9.setFitWidth(200.0);
		ctrl_9.setFitHeight(286.0);
		ctrl_9.setPreserveRatio(true);
		Image ctrl_10 = new Image(toUrl("images/back_of_card.png"));
		ctrl_9.setImage(ctrl_10);
		Insets ctrl_11 = new Insets(0, 30.0, 0, 30);
		HBox.setMargin(ctrl_9, ctrl_11);
		ImageView player1ImageView = new ImageView();
		_controller.player1ImageView = player1ImageView;
		//player1ImageView.setPickOnBounds(true);
		player1ImageView.setFitWidth(200.0);
		player1ImageView.setFitHeight(286.0);
		player1ImageView.setPreserveRatio(true);
		player1ImageView.setLayoutX(10.0);
		player1ImageView.setLayoutY(10.0);
		Image ctrl_12 = new Image(toUrl("images/3_of_spades.png"));
		player1ImageView.setImage(ctrl_12);
		ImageView player2ImageView = new ImageView();
		_controller.player2ImageView = player2ImageView;
		//player2ImageView.setPickOnBounds(true);
		player2ImageView.setFitWidth(200.0);
		player2ImageView.setFitHeight(286.0);
		player2ImageView.setPreserveRatio(true);
		player2ImageView.setLayoutX(207.0);
		player2ImageView.setLayoutY(10.0);
		Image ctrl_13 = new Image(toUrl("images/3_of_spades.png"));
		player2ImageView.setImage(ctrl_13);
		ImageView ctrl_14 = new ImageView();
		//ctrl_14.setPickOnBounds(true);
		ctrl_14.setFitWidth(200.0);
		ctrl_14.setFitHeight(286.0);
		ctrl_14.setPreserveRatio(true);
		ctrl_14.setLayoutX(404.0);
		ctrl_14.setLayoutY(10.0);
		Image ctrl_15 = new Image(toUrl("images/back_of_card.png"));
		ctrl_14.setImage(ctrl_15);
		Insets ctrl_16 = new Insets(0, 30.0, 0, 30.0);
		HBox.setMargin(ctrl_14, ctrl_16);
		ctrl_8.getChildren().setAll(ctrl_9, player1ImageView, player2ImageView, ctrl_14);
		BorderPane ctrl_17 = new BorderPane();
		ctrl_17.setPrefWidth(200.0);
		Label player1Label = new Label();
		player1Label.setTextFill(null);
		_controller.player1Label = player1Label;
		BorderPane.setAlignment(player1Label, CENTER);
		player1Label.setText("26 Cards");
		Insets ctrl_18 = new Insets(30.0);
		player1Label.setPadding(ctrl_18);
		ctrl_17.setLeft(player1Label);
		Label player2Label = new Label();
		player2Label.setTextFill(null);
		_controller.player2Label = player2Label;
		BorderPane.setAlignment(player2Label, CENTER);
		player2Label.setText("26 Cards");
		Insets ctrl_19 = new Insets(40.0);
		player2Label.setPadding(ctrl_19);
		ctrl_17.setRight(player2Label);
		Label warDeckLabel = new Label();
		warDeckLabel.setTextFill(null);
		_controller.warDeckLabel = warDeckLabel;
		BorderPane.setAlignment(warDeckLabel, CENTER);
		warDeckLabel.setText("2 Cards");
		ctrl_17.setCenter(warDeckLabel);
		Button ctrl_20 = new Button();
		ctrl_20.setBackground(null);
		ctrl_20.setBorder(null);
		ctrl_20.setOnAction(e -> _controller.playNextHand());
		ctrl_20.setText("Play Next Hand");
		//ctrl_20.setMnemonicParsing(false);
		ctrl_2.getChildren().setAll(ctrl_3, ctrl_8, ctrl_17, ctrl_20);
		Insets ctrl_21 = new Insets(20.0, 20.0, 20.0, 20.0);
		ctrl_2.setPadding(ctrl_21);
		ctrl_1.getChildren().setAll(ctrl_2);
		_view = ctrl_1;

		_controller.initialize(null, null);
	}

	private static String toUrl(String path) {
		return WebFXUtil.toUrl(path);
	}

}

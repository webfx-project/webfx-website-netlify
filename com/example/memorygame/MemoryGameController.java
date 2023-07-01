package com.example.memorygame;

import dev.webfx.platform.resource.Resource;
import javafx.event.ActionEvent;
import javafx.scene.control.Label;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.layout.AnchorPane;
import javafx.scene.layout.FlowPane;
import javafx.stage.Stage;

import java.util.ArrayList;
import java.util.Collections;

public class MemoryGameController /*implements Initializable*/ {

    //@FXML
    public Label correctGuessesLabel;

    //@FXML
    public Label guessLabel;

    //@FXML
    public FlowPane imagesFlowPane;

    private ArrayList<MemoryCard> cardsInGame;

    private MemoryCard firstCard, secondCard;
    private int numOfGuess;
    private int numOfMatches;

    //@FXML
    public void playAgain() {
        firstCard=null;
        secondCard =null;

        DeckOfCards deck = new DeckOfCards();
        deck.shuffle();
        cardsInGame = new ArrayList<>();

        for (int i =0; i<imagesFlowPane.getChildren().size()/2; i++)
        {
            Card cardDealt = deck.dealTopCard();
            cardsInGame.add(new MemoryCard(cardDealt.getSuit(),cardDealt.getFaceName()));
            cardsInGame.add(new MemoryCard(cardDealt.getSuit(),cardDealt.getFaceName()));
        }
        Collections.shuffle(cardsInGame);
        flipAllCards();

    }

    //@Override
    public void initialize(String location, String resources) {
        initializeImageView();
        playAgain();
    }

    /**
     * This will add a number to each ImageView and set the image to be the back of a Card
     */
    private void initializeImageView()
    {
        for (int i=0; i<imagesFlowPane.getChildren().size();i++)
        {
            //"cast" the Node to be of type ImageView
            ImageView imageView = (ImageView) imagesFlowPane.getChildren().get(i);
            imageView.setImage(new Image(Resource.toUrl("images/back_of_card.png", Card.class)));
            imageView.setUserData(i);

            //register a click listener
            imageView.setOnMouseClicked(event -> {
                flipCard((int) imageView.getUserData());
            });
        }
    }

    /**
     * This will show the back of all cards that are not matched
     */
    private void flipAllCards()
    {
        for (int i=0; i<cardsInGame.size();i++)
        {
            ImageView imageView = (ImageView) imagesFlowPane.getChildren().get(i);
            MemoryCard card = cardsInGame.get(i);

            if (card.isMatched())
                imageView.setImage(card.getImage());
            else
                imageView.setImage(card.getBackOfCardImage());
        }
    }

    private void flipCard(int indexOfCard)
    {
        if (firstCard==null && secondCard==null)
            flipAllCards();

        ImageView imageView = (ImageView) imagesFlowPane.getChildren().get(indexOfCard);

        if (firstCard==null)
        {
            firstCard = cardsInGame.get(indexOfCard);
            imageView.setImage(firstCard.getImage());
        }
        else if (secondCard==null)
        {
            numOfGuess++;
            secondCard = cardsInGame.get(indexOfCard);
            imageView.setImage(secondCard.getImage());
            checkForMatch();
            updateLabels();
        }
    }

    private void updateLabels()
    {
        correctGuessesLabel.setText(Integer.toString(numOfMatches));
        guessLabel.setText(Integer.toString(numOfGuess));
    }

    private void checkForMatch()
    {
        if (firstCard.isSameCard(secondCard))
        {
            numOfMatches++;
            firstCard.setMatched(true);
            secondCard.setMatched(true);
        }
        firstCard=null;
        secondCard=null;
    }

    //@FXML
    public void playWar(ActionEvent event) /*throws IOException*/ {
        //FXMLLoader fxmlLoader = new FXMLLoader(Main.class.getResource("war-view.fxml"));
        //Scene scene = new Scene(fxmlLoader.load());
        //Scene scene = new Scene(new FxmlWarView()._view, null);
        //get the Stage object from the ActionEvent
        AnchorPane view = new FxmlWarView()._view;
        Main.setView(view);
        Stage stage = (Stage) view.getScene().getWindow();

        stage.setTitle("War Game");
        //stage.setScene(scene);
        stage.show();
    }
}

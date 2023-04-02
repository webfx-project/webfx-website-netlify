package dev.webfx.lib.tracerframework;

import javafx.animation.Interpolator;
import javafx.animation.KeyFrame;
import javafx.animation.KeyValue;
import javafx.animation.Timeline;
import javafx.beans.property.BooleanProperty;
import javafx.beans.property.SimpleBooleanProperty;
import javafx.beans.value.WritableValue;
import javafx.scene.layout.Background;
import javafx.scene.layout.BackgroundFill;
import javafx.scene.layout.CornerRadii;
import javafx.scene.layout.Pane;
import javafx.scene.paint.Color;
import javafx.scene.paint.Paint;
import javafx.scene.shape.Circle;
import javafx.util.Duration;

/**
 * @author Bruno Salmon
 */
public class Switch extends Pane {

    private final static double RADIUS = 18, WIDTH = 76;
    private final Circle switchKnob;

    private final BooleanProperty selectedProperty = new SimpleBooleanProperty() {
        @Override
        protected void invalidated() {
            updateKnobLayoutX(true);
        }
    };
    public Switch() {
        super(new Circle(RADIUS - 3, Color.WHITE));
        switchKnob = (Circle) getChildren().get(0);
        setMinSize(WIDTH, 2 * RADIUS);
        setMaxSize(WIDTH, 2 * RADIUS);
        switchKnob.setLayoutY(RADIUS);
        updateKnobLayoutX(false);
        setOnMouseClicked(e -> setSelected(!isSelected()));
    }

    public void setKnobFill(Paint fill) {
        switchKnob.setFill(fill);
    }

    public void setBackgroundFill(Paint fill) {
        setBackground(new Background(new BackgroundFill(fill, new CornerRadii(RADIUS), null)));
    }

    public boolean isSelected() {
        return selectedProperty.get();
    }

    public BooleanProperty selectedProperty() {
        return selectedProperty;
    }

    public void setSelected(boolean selected) {
        this.selectedProperty.set(selected);
    }

    private void updateKnobLayoutX(boolean animate) {
        double layoutX = isSelected() ? WIDTH - RADIUS : RADIUS;
        if (!animate)
            switchKnob.setLayoutX(layoutX);
        else
            animateProperty(200, switchKnob.layoutXProperty(), layoutX);
    }

    static <T> Timeline animateProperty(int durationMillis, WritableValue<T> target, T endValue) {
        Timeline timeline = new Timeline(new KeyFrame(new Duration(durationMillis), new KeyValue(target, endValue, Interpolator.EASE_BOTH)));
        timeline.play();
        return timeline;
    }

}

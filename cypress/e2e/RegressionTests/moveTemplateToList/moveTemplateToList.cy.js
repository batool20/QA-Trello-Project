/// <reference types ="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import datautils from "../../../support/dataUtils.cy";
import moveTemplateToListActions from "../../../pageObjects/moveTemplateToList/Actions.cy";
import moveTemplateToListAssertions from "../../../pageObjects/moveTemplateToList/Assertions.cy";
const dataUtil = new datautils();
const moveTemplateToListAction = new moveTemplateToListActions();
const moveTemplateToListAssertion = new moveTemplateToListAssertions();
const boardName = "cy-Board-test-move-template"
const cardName = "cy-card-test-move-template"
let boardId , boardUrl , listId , cardId, cardUrl

before(()=>{
    dataUtil.createBoard(boardName).then((boardResponse)=>{
        boardId = boardResponse.body.id  
        boardUrl = boardResponse.body.url
        dataUtil.createBoradList(boardId,"To Do").then((listResponse)=>{
            listId = listResponse.body.id  

            dataUtil.createCard(listId,cardName).then((cardResponse)=>{
            cardId = cardResponse.body.id
            cardUrl = cardResponse.body.url
            dataUtil.convertCardToTemplate(cardId)
            }) 
        })
    })
    cy.loginToTrello()
})

Given("The user navigates to the existing card template",()=>{
    moveTemplateToListAction.openCard(cardUrl)
})

When("The user selects the option to move the template",()=>{
    moveTemplateToListAction.selectMoveTemplateOption()
})

When("The user chooses the target list from the available lists",()=>{
    moveTemplateToListAction.chooseTargetList("Doing")
})

When("The user clicks on the move button",()=>{
    moveTemplateToListAction.clickMoveButton()
})

Then("The template should be moved to the selected list successfully",()=>{
    moveTemplateToListAssertion.checkTemplateisMovedToList("Doing")
})

after(()=>{
    dataUtil.deleteBoard(boardId)
})

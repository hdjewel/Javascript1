/*  
Create an object that represents a cat. It should have properties for tiredness, hunger, loneliness and happiness
Next, write methods that increase and decrease those properties. Call them something that actually represents what would increase or decrease these things, like "feed", "sleep", or "pet".
Last, write a method that prints out the cat's status in each area.
Bonus: Make the functions take arguments that increase or decrease arbitrary amounts
Like different types of food make the cat less hungry
Or a length of sleep
Petting vs laser pointer - one makes the cat really happy, but also tired. One makes the cat active and happy, but probably hungry. Try generalizing this function so that you only have to pass in the argument "pet" or "laser".
Bonus: Make the functions as arbitrary as cats are - make it so the cat sometimes doesn't want to be petted.

*/

var cat =
{
    tiredness: 30,
    hunger: 100,
    lonliness:  5,
    happiness: 790,

    feed : function()
    {
        console.log("Crunch nom crunch purrr purr!");
        this.hunger = this.hunger - 15;
        this.happiness = this.happiness + 15;
    },

    sleep : function()
    {
        console.log("purrrrrrrrrrrr zzzzzzzzzzzzzzzzzzz");
        this.tiredness = this.tiredness - 10;
        this.hunger = this.hunger + 5;
        this.happiness = this.happiness + 15;
    },

    pet : function()
    {
        console.log("purrrrrrrrrrrrrrrrrr puurrrrrrrrrrrrrrrr");
        this.tiredness = this.tiredness + 10;
        this.hunger = this.hunger + 5;
        this.lonliness = this.lonliness - 5;
        this.happiness = this.happiness + 15;
    },

    cats_feelings : function()
    {
        if (this.tiredness <= 30)
        {
            console.log("I am frisky!");
        }
        else
        {
            console.log("Where's the sun? I am tired.");
        }
        if (this.hunger >= 100)
        {
            console.log("I am one staving kitty!!");
        }
        else
        {
            console.log("Oh I can't eat another bite. Meow");
        }
        if (this.lonliness <= 25)
        {
            console.log("Wish I had a kitty friend!");
        }
        else
        {
            console.log("Wow, just leave me alone already!!! OK??? MEOW! RIGHT?");
        }
        if (this.happiness <= 250)
        {
            console.log("Where is my mistress! I need attention!!");
        }
        else
        {
            console.log("Ohhhh! Look at the pretty colors in the wind!!!!");
        }
    }

};


































/*

objecty = {}
objecty['run'] = lambda x: x + 1

objecty['run']()

waterFountain.dispense()
waterFountain['dispense']()

waterFountain.getBrokenDuringTheWinter(true)
waterFountain['getBrokenDuringTheWinter'](false)

*/
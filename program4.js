// function to remove dupliacte element from the string 

//builtin method
                // function Characters(str) {
                //     return [...new Set(str)].join('');
                // }

                // let input = "programming";
                // let result = Characters(input);
                // console.log("String without duplicates:", result);


                //without builtin
                let input = "programming";
                console.log("Original String:", input);

                function Characters(string) {
                let unique = [];
                for (let i = 0; i < string.length; i++) {
                    if (!unique.includes(string[i])) {
                    unique.push(string[i]);
                }
            }
            return unique.join(""); 
        }

        let result = Characters(input);
        console.log("String without duplicates:", result);

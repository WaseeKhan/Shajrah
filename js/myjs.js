window.onload = function () { 
    var nodes = [
        { id: "1", name: "JANAB SALAAR BAKHSH", title: "title", Bio: "Pending Bio", img: "img/avtar_male.jpg"},
		
		{ id: "2", pid: "1", name: "JANAB JAMADAAR", title: "title", Bio: "Pending Bio", img: "img/avtar_male.jpg"},
		{ id: "3", pid: "1", name: "JANAB SARDAAR", title: "title", Bio: "Pending Bio", img: "img/avtar_male.jpg", color:"XFAM1" },
		
		{ id: "4", pid: "2", name: "JANAB NAJABAT ALI", title: "title", Bio: "Pending Bio", img: "img/avtar_male.jpg",color:"XFAM2" },
		{ id: "5", pid: "2", name: "JANAB SHUKRULLAH", title: "title", Bio: "Pending Bio", img: "img/avtar_male.jpg"},
		{ id: "6", pid: "2", name: "JANAB HUKUM ALI", title: "title", Bio: "Pending Bio", img: "img/avtar_male.jpg",color:"XFAM2"  },
		{ id: "7", pid: "2", name: "JANAB HAYAT MOHAMMAD", title: "title", Bio: "Pending Bio", img: "img/avtar_male.jpg", color:"XFAM2"},
		
		{ id: "8", pid: "3", name: "JANAB RAJJAD ALI", title: "title", Bio: "Pending Bio", img: "img/avtar_male.jpg",color:"XFAM1"},
		{ id: "9", pid: "3", name: "JANAB JUNAAB ALI", title: "title", Bio: "Pending Bio", img: "img/avtar_male.jpg",color:"XFAM1" },
		{ id: "10", pid: "3", name: "JANAB ABBAS ALI", title: "title", Bio: "Pending Bio", img: "img/avtar_male.jpg",color:"XFAM1" },
		
		{ id: "11", pid: "5", name: "JANAB MOHAMMAD NAEEM", title: "title", Bio: "Pending Bio", img: "img/avtar_male.jpg",color:"FAM1"  },
		{ id: "12", pid: "5", name: "JANAB ABDUL RASHEED", title: "title", Bio: "Pending Bio", img: "img/avtar_male.jpg", color:"FAM2"  },
		{ id: "13", pid: "5", name: "JANAB ABDUL WAHEED", title: "title", Bio: "Pending Bio", img: "img/avtar_male.jpg",color:"FAM3"  },
		{ id: "15", pid: "5", name: "JANAB MOHAMMAD SHOEB ", title: "title", Bio: "Pending Bio", img: "img/avtar_male.jpg",color:"FAM5"  },
		{ id: "14", pid: "5", name: "JANAB MOHAMMD UMAR", title: "title", Bio: "Pending Bio", img: "img/avtar_male.jpg", color:"FAM4"},
		{ id: "16", pid: "5", name: "MOHTARMA SHAYERA BAANO ", title: "title", Bio: "Pending Bio", img: "img/avtar_female.png",color:"FAM6"},
		
		{ id: "17", pid: "6", name: "JANAB KAMALUDDIN", title: "title", Bio: "Pending Bio", img: "img/avtar_male.jpg", color:"XFAM2" },
		
		{ id: "18", pid: "7", name: "JANAB JALALUDDIN", title: "title", Bio: "Pending Bio", img: "img/avtar_male.jpg", color:"XFAM2"  },
		
		{ id: "19", pid: "11", name: "JANAB NOORUL HUDA", title: "title", Bio: "Pending Bio", img: "img/avtar_male.jpg",color:"FAM1"  },
		
		{ id: "20", pid: "12", name: "JANAB ABDUL HAMMED", title: "title", Bio: "Pending Bio", img: "img/avtar_male.jpg", color:"FAM2"  },
		{ id: "21", pid: "12", name: "JANAB ABDUL SAMEED", title: "title", Bio: "Pending Bio", img: "img/avtar_male.jpg", color:"FAM2"  },
		
		{ id: "22", pid: "13", name: "JANAB ABBAS ALI", title: "title", Bio: "Pending Bio", img: "img/avtar_male.jpg",color:"FAM3"  },
		
		{ id: "23", pid: "14", name: "JANAB MOHAMMD SAMEER", title: "title", Bio: "Pending Bio", img: "img/avtar_male.jpg", color:"FAM4"  },
		{ id: "24", pid: "14", name: "JANAB MOHAMMD MOIN", title: "title", Bio: "Pending Bio", img: "img/avtar_male.jpg", color:"FAM4"  },
		
		{ id: "25", pid: "15", name: "JANAB SHAMSHUL HUDA", title: "title", Bio: "Pending Bio", img: "img/avtar_male.jpg",color:"FAM5"  },
		{ id: "26", pid: "15", name: "JANAB QUAMRUL HUDA", title: "title", Bio: "Pending Bio", img: "img/avtar_male.jpg",color:"FAM5"  },
		{ id: "27", pid: "15", name: "JANAB NAJMUL HUDA", title: "title", Bio: "Pending Bio", img: "img/avtar_male.jpg",color:"FAM5"  },


		{ id: "28", pid: "19", name: "MOHAMMAD WASEEM", title: "title", Bio: "Pending Bio", img: "img/avtar_male.jpg",color:"FAM1"  },
		{ id: "29", pid: "19", name: "SHABANA AAFREEN", title: "title", Bio: "Pending Bio", img: "img/avtar_female.png",color:"FAM1"  },
		{ id: "30", pid: "19", name: "TANVEERUL HUDA(ZEESHAN)", title: "title", Bio: "Pending Bio", img: "img/avtar_male.jpg",color:"FAM1"  },
		{ id: "31", pid: "19", name: "MOHAMAD EHTESHAM", title: "title", Bio: "Pending Bio", img: "img/avtar_male.jpg",color:"FAM1"  },
		{ id: "32", pid: "19", name: "MOHAMMAD AYAAN", title: "title", Bio: "Pending Bio", img: "img/avtar_male.jpg",color:"FAM1"  },
		
		{ id: "33", pid: "20", name: "ALFIYA", title: "title", Bio: "Pending Bio", img: "img/avtar_female.png",color:"FAM2"  },
		{ id: "34", pid: "20", name: "MINNI", title: "title", Bio: "Pending Bio", img: "img/avtar_female.png",color:"FAM2"  },
		
		{ id: "35", pid: "22", name: "ZEENAT KHAN", title: "title", Bio: "Pending Bio", img: "img/avtar_male.jpg",color:"FAM3"  },
		{ id: "36", pid: "22", name: "NOUMAN KHAN", title: "title", Bio: "Pending Bio", img: "img/avtar_male.jpg",color:"FAM3"  },
		{ id: "37", pid: "22", name: "NABA KHAN", title: "title", Bio: "Pending Bio", img: "img/avtar_male.jpg",color:"FAM3"  },

		{ id: "38", pid: "24", name: "UNKNOWN-G", title: "title", Bio: "Pending Bio", img: "img/avtar_female.png",color:"FAM4"  },
		
		
		{ id: "39", pid: "25", name: "KULSUM", title: "title", Bio: "Pending Bio", img: "img/avtar_female.png",color:"FAM5"  },
		{ id: "40", pid: "25", name: "MASWOOD", title: "title", Bio: "Pending Bio", img: "img/avtar_male.jpg",color:"FAM5"  },
		{ id: "41", pid: "25", name: "MAHFOOZ", title: "title", Bio: "Pending Bio", img: "img/avtar_male.jpg",color:"FAM5"  },
		{ id: "42", pid: "25", name: "UZMA", title: "title", Bio: "Pending Bio", img: "img/avtar_female.png",color:"FAM5"  },
		{ id: "43", pid: "25", name: "UBAID", title: "title", Bio: "Pending Bio", img: "img/avtar_male.jpg",color:"FAM5"  },
		
		{ id: "44", pid: "26", name: "SHIFA", title: "title", Bio: "Pending Bio", img: "img/avtar_female.png",color:"FAM5"  },
		{ id: "45", pid: "26", name: "KAIF KHAN", title: "title", Bio: "Pending Bio", img: "img/avtar_male.jpg",color:"FAM5"  },
		{ id: "46", pid: "26", name: "SAIF KHAN", title: "title", Bio: "Pending Bio", img: "img/avtar_male.jpg",color:"FAM5"  },
		
		{ id: "47", pid: "27", name: "NAJIA", title: "title", Bio: "Pending Bio", img: "img/avtar_female.png",color:"FAM5"  },
		{ id: "48", pid: "27", name: "SANA", title: "title", Bio: "Pending Bio", img: "img/avtar_female.png",color:"FAM5"  },
		{ id: "49", pid: "27", name: "ANAS", title: "title", Bio: "Pending Bio", img: "img/avtar_male.jpg",color:"FAM5"  },

		
    ];

    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        switch (node.color) {
            case "FAM1":
                node.tags = ["FAM1"];
                break;
            case "FAM2":
				node.tags = ["FAM2"];
                break;
            case "FAM3":
				node.tags = ["FAM3"];
                break;
            case "FAM4":
				node.tags = ["FAM4"];
                break;
			case "FAM5":
				node.tags = ["FAM5"];
                break;
			case "FAM6":
                node.tags = ["FAM6"];
                break;
			case "XFAM1":
                node.tags = ["XFAM1"];
                break;
			case "XFAM2":
                node.tags = ["XFAM2"];
                break;
        }
    }

    var chart = new OrgChart(document.getElementById("tree"), {
        layout: OrgChart.mixed,
        nodeBinding: {
            field_0: "name",
            field_1: "title",
            img_0: "img",
			Bio: "Bio"
        },
        nodes: nodes
    });
};


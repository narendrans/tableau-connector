(function propertiesbuilder(attr) {
    var props = {};
    props["user"] = attr[connectionHelper.attributeUsername];
    props["password"] = attr[connectionHelper.attributePassword];

    if (attr["sslmode"] !== "") {
        props["ssl"] = "true";
    }

    return props;
})